import { Request, Response } from "express";
import * as whatsapp from "whatsapp-web.js";
import * as qr from "qr-image";

// const whatsapp = require('whatsapp-web.js')
// const qr = require('qr-image')

// module.exports = 

export { WhatsAppController }

class WhatsAppController {

  

streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () =>
      resolve(Buffer.concat(chunks).toString("utf8"))
    );
  });
}

  //COMUNICATION
  async sendWhatsApp(req, res) {
    const createAndSend = async (
      arrayMensajes ,
      res
    ) => {
      const promise = new Promise((resolve, reject) => {
        const whatsappClient = new whatsapp.Client({puppeteer: { headless: true, ['args']: ['--no-sandbox'] }});

        const handleReady = () => {
          let promiseArray = [];
          arrayMensajes.forEach(async (item) => {
            promiseArray.push(
              whatsappClient.sendMessage(
                item["phone"] + "@c.us",
                item["message"]
              )
            );
          });
          Promise.all(promiseArray).then((i) => {
            setTimeout(function () {
              whatsappClient.logout();
            }, 10000);
          });
        };

        const handleQr = async (qr) => {
          let svg = await this.streamToString(generateImage(qr));
          whatsappClient.removeListener("qr", handleQr);
          resolve(svg);
        };

        const generateImage = (base64) => {
          return qr.image(base64, { type: "svg", margin: 4 });
        };

        const handleDisconnect = () => {
          whatsappClient
            .destroy()
            .then((i) => console.log("Destruido Bien"))
            .catch((e) => console.log("Error al destruir"));
        };

        //LISTENERS
        whatsappClient.on("ready", handleReady);
        whatsappClient.on("qr", handleQr);
        whatsappClient.on("disconnected", handleDisconnect);
        
        setTimeout(()=>{          
            whatsappClient
            .destroy()
            .then((i) => console.log("Destruido Bien"))
            .catch((e) => console.log("Error al destruir", e));         
        },60000)

        try { 
          whatsappClient.initialize().catch(e => console.log("Se destruye el cliente: ",e));
        } 
        catch (error) {
          whatsappClient.destroy().catch((e) => {
            console.log("ERRROR CONTROLADOR WHATSAPP", e);
          });
          reject("Ocurrio un error");
        }

      });

      return promise;
    };

    //START
    try {
      let { data } = req.body;
      let result = await createAndSend(data, res);
      res.json(result);
    } catch (error) {
      console.log("ERROR:ClientController:sendEmail: ", error);
      return res.json("Datos de SendEmail Invalidos");
    }
  }
}


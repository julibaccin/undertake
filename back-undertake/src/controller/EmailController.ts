import { Request, Response } from "express";
import * as nodemailer from "nodemailer";
import * as Mail from "nodemailer/lib/mailer"
import * as SMTPTransport from "nodemailer/lib/smtp-transport"
import { getRepository } from "typeorm";
import { User } from "../entity/User";

//REFERENCIA
//https://ourcodeworld.com/articles/read/264/how-to-send-an-email-gmail-outlook-and-zoho-using-nodemailer-in-node-js

export class EmailController {
  async sendEmail(req: Request, res: Response) {
    
    //Busco el user
    let {settingPassword,settingEmail} = await getRepository(User).findOne(req.idUser);
    
    let { to, subject, text } = req.body;
    
    //AJUSTAS ASUNTO VACIO
    if (!to || !subject || !text) return res.json( {error:"Datos de SendEmail Invalidos"} );
    
    let service = settingEmail.includes("gmail") ? 'gmail' : 'hotmail'

    const transporterOptions: SMTPTransport.Options = {
      service,
      auth: {
        user: settingEmail,
        pass: settingPassword,
      },
    };

    const mailOptions: Mail.Options = {
      from: settingEmail,
      to,
      subject,
      text,
    };

    const transporter = nodemailer.createTransport(transporterOptions);

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        transporter.close();
        return res.json({ error });
      } else {
        transporter.close();
        return res.json({ data: info.messageId , error: null });
      }
    });
    
  }
}

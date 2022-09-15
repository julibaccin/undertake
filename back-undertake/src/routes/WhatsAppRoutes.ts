import * as express from "express";
import {WhatsAppController} from '../controller/WhatsAppController';

const router = () => {
  let whatsAppController = new WhatsAppController();
  let router = express.Router();

  router.post("", (req, res) => whatsAppController.sendWhatsApp(req, res));

  return router;
};

export default router;
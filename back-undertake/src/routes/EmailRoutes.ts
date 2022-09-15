import * as express from "express";
import { EmailController } from "./../controller/EmailController";

const router = () => {
  let emailController = new EmailController();
  let router = express.Router();

  router.post("", (req, res) => emailController.sendEmail(req, res));
  
  return router;
};

export default router;

import * as express from "express";
import { hasPayment } from "../middleware/payment.middleware";
import { PaymentController } from "./../controller/PaymentController";

const router = () => {
  let paymentController = new PaymentController();
  let router = express.Router();

  router.post("", (req, res) => paymentController.createPayment(req, res));
  router.get("/feedback", (req, res) => paymentController.feedback(req, res));
  router.get("/hasPayment", hasPayment , (req,res) => paymentController.hasPayment(req,res));

  return router;
};

export default router;


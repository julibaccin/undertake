import * as express from "express";
import { ClientController } from "./../controller/ClientController";

const router = () => {
  let clientController = new ClientController();
  let router = express.Router();

  //CRUD
  router.get("", (req, res) => clientController.getAll(req, res));
  router.get("/:id", (req, res) => clientController.getOne(req, res));
  router.post("", (req, res) => clientController.create(req, res));
  router.put("/:id", (req, res) => clientController.update(req, res));
  router.delete("/:id", (req, res) => clientController.delete(req, res));
  //EXCEL INSERT
  router.post("/createForExcel", (req, res) => clientController.createForExcel(req,res))

  return router;
};

export default router;

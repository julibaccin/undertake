import * as express from "express";
import { UserController } from "./../controller/UserController";

const router = () => {
  let userController = new UserController();
  let router = express.Router();

  //CRUD
  router.get("", (req, res) => userController.getAll(req, res));
  router.get("/:id", (req, res) => userController.get(req, res));
  router.put("/:id", (req, res) => userController.update(req, res));

  return router;
};

export default router;

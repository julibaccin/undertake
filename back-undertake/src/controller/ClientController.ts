import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Client } from "../entity/Client";

export class ClientController {
  private _clientRepository: Repository<Client>;

  constructor() {
    this._clientRepository = getRepository(Client);
  }

  async getAll(req: Request, res: Response) {
    const {idUser} = req;
    const results = await this._clientRepository.find({
      where: { active: true, idUser },
    });
    return res.json({ data: results, error: null });
  }

  async getOne(req: Request, res: Response) {
    const {idUser} = req;
    const results = await this._clientRepository.findOne({
      where: { id: req.params.id, active: true, idUser },
    });
    return res.json({ data: results, error: null });
  }

  async create(req: Request, res: Response) {

    const {idUser} = req;

    if (!req.body) {
      return res.json({ data: null, error: "Falta el Body" });
    }

    let newClient = { ...req.body, idUser };

    try {
      const client = this._clientRepository.create(newClient);
      const response = await this._clientRepository.save(client);
      return res.json({ data: response, error: null });
    } catch (error) {
      console.log("ERROR:ClientController:create: ", error);
      return res.json({ data: null, error: "Datos de Create Invalidos" });
    }
  }

  async update(req: Request, res: Response) {

    const {idUser} = req;

    try {
      const client = await this._clientRepository.findOne(req.params.id);
      getRepository(Client).merge(client, req.body);
      const results = await this._clientRepository.save(client);
      return res.json({ data: results, error: null });
    } catch (error) {
      console.log("ERROR:ClientController:update: ", error);
      return res.json({ data: null, error: "Datos de Update Invalidos" });
    }
  }

  async delete(req: Request, res: Response) {

    const {idUser} = req;

    try {
      const client = await this._clientRepository.findOne(req.params.id);
      client.active = false;
      const results = await this._clientRepository.save(client);
      return res.json({ data: results });
    } catch (error) {
      console.log("ERROR:ClientController:delete: ", error);
      return res.json({ error: "Datos de Delete Invalidos" });
    }
  }

  async createForExcel(req: Request, res: Response) {

    const {idUser} = req;

    if (!req.body.data) {
      return res.json({ data: "Datos incorrectos", error: true });
    }

    try {
      req.body.data.forEach((client) => {
        const fullClient: Client = {
          ...client,
          idUser: idUser,
          active: true,
        };
        const newClient = this._clientRepository.create(fullClient);
        const results = this._clientRepository.save(newClient);
      });
      res.json({ data: "Clientes Cargados Con Exito", error: false });
    } catch (error) {
      return res.json({ data: null, error: "Datos de Create Invalidos" });
    }
  }
}

import { getRepository, Repository } from "typeorm";
import { Request, Response } from "express";
import { User } from "./../entity/User";

export class SettingController {
  private _userRepository: Repository<User>;

  constructor() {
    this._userRepository = getRepository(User);
  }

  async update(req: Request, res: Response) {
    try {
      const existUser = await this._userRepository.findOne(req.idUser)
      this._userRepository.merge(existUser, req.body);
      const results = await this._userRepository.save(existUser);
      return res.json({ data: results, error: null });
    } catch (error) {
      return res.json({ error: "Algo Salio Mal" });
    }
  }

  async get(req:Request,res:Response){
    try {
      const user = await this._userRepository.findOne(req.idUser)
      return res.json({ data: user, error: null })
    } catch (error) {
      return res.json({ error: "Algo Salio Mal" });
    }

  }

}


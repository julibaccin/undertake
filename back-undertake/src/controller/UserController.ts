import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { User } from "../entity/User";

export class UserController {

	private _userRepository: Repository<User>;

	constructor() {
		this._userRepository = getRepository(User);
	}

	async getAll(req: Request, res: Response) {
		const users = await this._userRepository.find();
		return res.json({ data: users, error: null });
	}

	async get(req: Request, res: Response) {
		const users = await this._userRepository.findOne(req.params.id)
		return res.json({ data: users, error: null });
	}

	async update(req: Request, res: Response) {
		try {
			const client = await this._userRepository.findOne(req.params.id);
			console.log(req.body)
			console.log(client)
			getRepository(User).merge(client, req.body);
			const results = await this._userRepository.save(client);
			return res.json({ data: results, error: null });
		} catch (error) {
			console.log("ERROR:ClientController:update: ", error);
			return res.json({ data: null, error: "Datos de Update Invalidos" });
		}
	}

}

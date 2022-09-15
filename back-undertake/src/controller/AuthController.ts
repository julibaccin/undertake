import { getRepository, Repository } from "typeorm";
import { Request, Response } from "express";
import { User } from "./../entity/User";
import * as jwt from "jsonwebtoken";
import { env } from "process";
import * as bcrypt from "bcrypt";

export class AuthController {
	private _userRepository: Repository<User>;

	constructor() {
		this._userRepository = getRepository(User);
	}

	private static getToken(payload) {
		return jwt.sign(payload, env.SECRET_KEY, { expiresIn: "60m" });
	}

	async signin(req: Request, res: Response) {
		const { user, password } = req.body;
		if (!user || !password) return res.json({ error: "Faltan datos" });

		const existUser = await this._userRepository.findOne({ user });

		if (existUser) {
			const isCorrectPassword = await bcrypt.compare(
				password,
				existUser.password,
			);
			if (!isCorrectPassword)
				return res.json({
					error: "No existe un usuario con esas credenciales",
				});

			const payload = { id: existUser.id };
			const token = AuthController.getToken(payload);

			return res.status(200).json({ data: { token }, error: null });
		}

		return res
			.status(200)
			.json({ error: "No existe un usuario con esas credenciales" });
	}

	async register(req: Request, res: Response) {
		const { user, password } = req.body;
		if (!user || !password) return res.json({ error: "Faltan datos" });

		try {
			let existuser = await this._userRepository.findOne({
				where: { user },
			});

			if (existuser) {
				return res.json({ error: "El Usuario ya existe" });
			}

			const passwordEncrypt = await bcrypt.hash(password, 10);

			let date = new Date(Date.now());
			date.setDate(date.getDate() + 15);

			const newUser = this._userRepository.create({
				user,
				password: passwordEncrypt,
				created_at: new Date().toISOString().slice(0, 10),
				dateExpiration: date,
			});
			const userSave = await this._userRepository.save(newUser);
			const payload = { id: userSave.id };
			const token = AuthController.getToken(payload);

			return res.status(200).json({ data: { token }, error: null });
		} catch (error) {
			console.log("Register", error);
			return res.json({ error: "Algo Salio Mal" });
		}
	}
}

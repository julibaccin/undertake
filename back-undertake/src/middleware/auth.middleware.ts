import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

const isValidToken = (token: string) => {
	return new Promise<User>((resolve, reject) => {
		jwt.verify(token, process.env.SECRET_KEY as string , (err, decoded: User) => {
			if (err) {
				reject(err);
			}
			resolve(decoded);
		});
	});
};

const isValidUser = async (user: User) => {
	console.log(user);
	let existUser = await getRepository(User).findOne(user.id);
	return existUser ? true : false;
};

const isAuthorized = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const bearerHeader = req.headers["authorization"];
	if (!bearerHeader)
		return res.status(200).json({ error: "Token is not provide" });
	const token = bearerHeader.split(" ")[1];

	try {
		const payload = await isValidToken(token);
		const isValid = await isValidUser(payload);
		if (isValid) {
			req.idUser = payload["id"];
			next();
			return;
		}

		return res.status(200).json({ error: "User invalid" });
	} catch (error) {
		return res.status(200).json({ error: error.message });
	}
};

export { isAuthorized };

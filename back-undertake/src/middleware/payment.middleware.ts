import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

///A partir del idUser, verifica si pago o no, y bloquea funcionalidad o deja pasar
const hasPayment = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		
        let user = await getRepository(User).findOne(req.idUser)

        if(user.dateExpiration >= new Date(Date.now())){
            next()
			return;
        }

		return res.status(200).json({ error: "User not has payment" });
	} catch (error) {
		return res.status(200).json({ error: error.message });
	}
};

export { hasPayment };

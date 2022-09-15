import { Request, Response } from "express";
import { Client } from "../entity/Client";
import * as mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

mercadopago.configure({
	access_token:
		"TEST-7927686877511257-061512-54da36fbf3c6f4f2de5b2744b4a25ace-443135971",
});

export class PaymentController {
	constructor() {}

	createPayment(req: Request, res: Response) {
		let preference: CreatePreferencePayload = {
			items: [
				{
					title: "Paquete Basico",
					unit_price: 1000,
					quantity: 1,
				},
			],
			back_urls: {
				success: "http://localhost:3000/api/payment/feedback",
				failure: "http://localhost:3000/api/payment/feedback",
				pending: "http://localhost:3000/api/payment/feedback",
			},
			auto_return: "approved",
		};

		mercadopago.preferences
			.create(preference)
			.then(function (response) {
				res.json({ id: response.body.id });
			})
			.catch(function (error) {
				console.log(error);
				res.json("Algo fallo");
			});
	}

	feedback(req: Request, res: Response) {
		res.json({
			Payment: req.query.payment_id,
			Status: req.query.status,
			MerchantOrder: req.query.merchant_order_id,
		});
	}

	async hasPayment(req:Request,res : Response){
		let user = await getRepository(User).findOne(req.idUser)
		return res.status(200).json({error:null, data: user.dateExpiration})
	}
}

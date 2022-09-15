declare global {
	namespace Express {
		interface Request {
			idUser: string;
		}
	}
}

import * as _ from "reflect-metadata";
import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
config()
import cors from "cors";

//Database Options
import configDb from "./dbconfig/config";

//Routes
import clientRouter from "./routes/ClientRoutes";
import authRouter from "./routes/AuthRoutes";
import emailRouter from "./routes/EmailRoutes";
import whatsAppRouter from "./routes/WhatsAppRoutes";
import paymentRouter from "./routes/PaymentRoutes";
import userRouter from "./routes/UsersRoutes";

//Middleware
import { isAuthorized } from "./middleware/auth.middleware";
import { ConnectionOptions, createConnection } from "typeorm";
import { hasPayment } from "./middleware/payment.middleware";

const db = async () => {
	await createConnection( configDb as ConnectionOptions );
};

const start = () => {

  const app = express();
	app.set("port", process.env.PORT || 3000);

	//  MIDDLEWARES
	app.use(cors());
	app.use(express.json());
	app.use(morgan("dev"));
	app.use('/public', express.static(__dirname + '/public'));

  //  ROUTES
	const clientR = clientRouter();
	const authR = authRouter();
	const emailR = emailRouter();
	const whatsAppR = whatsAppRouter();
	const paymentR = paymentRouter();
	const userR = userRouter();
	
  	app.use("/api/auth", authR);
	app.use("/api/clients", isAuthorized, clientR);
	app.use("/api/email", isAuthorized, hasPayment , emailR);
	app.use("/api/whatsapp", isAuthorized, hasPayment ,whatsAppR);
	app.use("/api/payment", isAuthorized ,  paymentR);
	app.use("/api/users",  userR);
	
	//  START SERVER
	app.listen(app.get("port"));
	console.log("Express server has started on port: " + app.get("port"));

	return app;
};

db().then(() => {
	console.log("DB CONECTADA");
	start();
});

export { start }




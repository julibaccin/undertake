export default {
	type: "mysql",
	host: process.env.HOSTDB,
	port: parseInt(process.env.PORTDB) || 3301,
	username: process.env.USERDB,
	password: process.env.PASSDB,
	database: process.env.NAMEDB,
	synchronize: true,
	logging: false,
	entities: ["src/entity/*.ts", "src/entity/*.js"],
};

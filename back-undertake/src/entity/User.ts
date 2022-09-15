import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid") id: string;
	//BASIC
	@Column({ nullable: false }) user: string;
	@Column({ nullable: false }) password: string;
	@Column({ nullable: false }) created_at: Date;
	//SETTINGS
	@Column({ nullable: true }) settingEmail: string;
	@Column({ nullable: true }) settingPassword: string;
	@Column({ nullable: true }) tokenMercadoPago: string;
	//CONTROL
	@Column({ nullable: false }) dateExpiration: Date;
	@Column({ nullable: false, default: false }) active: Boolean;
}

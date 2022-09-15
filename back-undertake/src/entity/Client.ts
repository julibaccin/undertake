import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Client {
	@PrimaryGeneratedColumn()
	id: number;
	//PERSONA
	@Column({ nullable: true }) firstName: string;
	@Column({ nullable: true }) lastName: string;
	@Column({ nullable: true }) enterprise: string;

	@Column({ nullable: true }) birthDate: Date;
	@Column({ nullable: true }) activity: string;
	@Column({ nullable: true }) civilStatus: number; // 1 soltero 2 casado 3 viudo
	@Column({ nullable: true }) gender: string; // 1 hombre 2 mujer 3 otro
	//DIRECTION
	@Column({ nullable: true }) address: string;
	@Column({ nullable: true }) country: string;
	@Column({ nullable: true }) province: string;
	@Column({ nullable: true }) city: string;
	//CONTACT
	@Column({ nullable: true }) phone: string;
	@Column({ nullable: true }) email: string;
	//SOCIAL MEDIAS
	@Column({ nullable: true }) facebookLink: string;
	@Column({ nullable: true }) instagramLink: string;
	@Column({ nullable: true }) otherLink: string;
	@Column({ nullable: true })	haveWhatsapp: boolean;
	@Column({ nullable: true }) haveTelegram: boolean;
	//ADICIONALES
	@Column({ nullable: true }) note: string;
    @Column({ nullable: true }) lastPurchase: string;
    @Column({ nullable: true }) lastTalk: string;
	//CONTROL
	@Column({ nullable: false, default: true }) active: boolean;
	//RELACIONES
	@Column({ nullable: false }) idUser: string;
}

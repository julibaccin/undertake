export interface IClient {
    idClient?: number,
    firstName?: string,
    lastName?: string,
    address?: string,
    city?: string,
    birthDate?: Date,
    activity?: string,
    civilStatus?: number, // 1 Soltero/a | 2 Casado/a | 3 Divorciado/a | 4 Viudo/a
    isWoman?: boolean,
    //DIRECTION
    country?: string,
    province?: string,
    zone?: string,
    //CONTACT
    phone?: string,
    email?: string,
    //ADICIONALES
    note?: string,
    active?: boolean
}
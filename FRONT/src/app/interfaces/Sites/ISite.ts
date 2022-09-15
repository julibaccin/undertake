export interface ISite{
  siteId: string,
  uid: string,
  type: number, //1 Landing // 2 Commerce
  title: string,
  description: string,
  urlSite: string,
  imgUrlMain: string,
  imgUrlLogo: string,
  category: string,
  contact: IContact,
  created_at: number,
  updated_at: number,
  active: boolean,
  slogan: string,
  products?: any
}

export interface IContact{
  city: string,
  country: string,
  province: string,
  street: string,
  number: string,
  department: string,
  phone: string,
  facebookLink: string,
  instagramLink: string,
  whatsapp: string,
}

export interface IProduct {
  name: string,
  description: string
  price: number
  imgUrl: string,
  main: boolean,
  productCategory: string,
  active: boolean
}

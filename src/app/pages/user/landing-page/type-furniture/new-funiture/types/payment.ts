import * as stream from "stream";

export interface Bill {
  amount: number,
  customer: string,
  phone: string,
  email: string,
  andress: string,
  note: string | null,
  payMethod: string
  status: string,
  createdDate: string | null
}
export interface Account {
  id: number
  user: string,
  pass: string,
  name: string,
  phoneNumber: string,
  email:string,
  address:string
}

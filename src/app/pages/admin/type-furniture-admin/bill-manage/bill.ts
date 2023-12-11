export interface BillManage {
  id: number;
  amount: number;
  customer: string;
  phone: string;
  email: string;
  andress: string;
  status: string;
  note: string;
  payMethod: string;
  createdDate: Date;
}

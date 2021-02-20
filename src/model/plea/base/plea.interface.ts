import { ICompany } from "../../company";
import { IPleagan } from "../../pleagan";
import { PLEA_STATUS } from "../enum";
import { IProduct } from "../../product";

export interface IPlea {
  description: string;
  status: PLEA_STATUS;
  company: ICompany;
  initiator: IPleagan;
  nonVeganProduct: IProduct;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  supporters?: IPleagan[];
  veganProduct?: IProduct;
}

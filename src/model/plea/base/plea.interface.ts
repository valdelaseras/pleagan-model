import { ICompany } from "../../company";
import { IPleagan } from "../../pleagan";
import { PLEA_STATUS } from "../enum";
import { IProduct } from "../../product";

export interface IPlea {
  id?: number;
  status?: PLEA_STATUS;
  createdAt?: Date;
  updatedAt?: Date;
  company?: ICompany;
  initiator?: IPleagan;
  supporters?: IPleagan[];
  nonVeganProduct?: IProduct;
  veganProduct?: IProduct;
}

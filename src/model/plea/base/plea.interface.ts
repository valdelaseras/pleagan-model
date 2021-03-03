import { ICompany } from "../../company";
import { PLEA_STATUS } from "../enum";
import { IProduct } from "../../product";
import { ISupport } from "./support.interfase";
import { IPleagan } from "../../../index";

export interface IPlea {
  description: string;
  status: PLEA_STATUS;
  company: ICompany;
  nonVeganProduct: IProduct;
  numberOfSupports: number;
  pleagan?: IPleagan;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  supports?: ISupport[];
  veganProduct?: IProduct;
}

import { ICompany } from "../company/company.interface";
import { IPleagan } from "../pleagan/pleagan.interface";
import { PLEA_STATUS } from "./plea-status.enum";

export interface IPlea {
  id: string;
  status: PLEA_STATUS;
  creationTimestamp: string;
  company: ICompany;
  initiator: IPleagan;
  supporters: IPleagan[];
  imageUrl: string;
}

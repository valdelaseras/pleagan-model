import { ICompany } from "../company";
import { IPleagan } from "../pleagan";
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

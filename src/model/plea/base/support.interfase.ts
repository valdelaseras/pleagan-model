import { IPlea, IPleagan } from "../../../index";

export interface ISupport {
  comment: string;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  plea: IPlea;
  supporter: IPleagan;
}

import { IPleagan } from "../../../";

export interface ISupport {
  comment: string;
  pleagan?: IPleagan;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

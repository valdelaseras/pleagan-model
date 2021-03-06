import { IPleagan } from "../../../index";

export interface IMessage {
  subject: string;
  text: string;
  url: string;
  opened: boolean;
  updatedAt: string;
  createdAt: string;
  sender: IPleagan;
}

import { IUserSettings } from "../settings";
import { ISupport } from "../../plea/base/support.interface";
import { IDevice } from "./device.interface";

export interface IPleagan {
  uid: string;
  displayName: string;
  photoUrl?: string;
  country?: string;
  supports?: ISupport[];
  settings?: IUserSettings;
  devices?: IDevice[];
}

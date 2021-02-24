import { IUserSettings } from "../settings";
import { ISupport } from "../../plea/base/support.interfase";

export interface IPleagan {
  uid: string;
  displayName: string;
  photoUrl?: string;
  country?: string;
  supports?: ISupport[];
  settings?: IUserSettings;
}

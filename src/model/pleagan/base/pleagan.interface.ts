import { IUserSettings } from "../settings";
import { ISupport } from "../../plea/base/support.interfase";
import { IPlea } from "../../../index";

export interface IPleagan {
  uid: string;
  photoUrl?: string;
  displayName?: string;
  country?: string;
  supports?: ISupport[];
  initiatedPleas?: IPlea[];
  settings?: IUserSettings;
}

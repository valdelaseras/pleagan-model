import { IUserSettings } from "../settings";
import { ISupport } from "../../plea/base/support.interfase";
import { IPlea } from "../../../index";

export interface IPleagan {
  uid: string;
  emailVerified: boolean;
  email: string;
  photoUrl?: string;
  displayName?: string;
  country?: string;
  settings?: IUserSettings;
  supports?: ISupport[];
  initiatedPleas?: IPlea[];
}

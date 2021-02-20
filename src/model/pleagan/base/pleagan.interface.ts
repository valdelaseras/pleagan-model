import { IUserSettings } from "../settings/user-settings.interface";

export interface IPleagan {
  uid: string;
  emailVerified: boolean;
  email: string;
  photoUrl?: string;
  displayName?: string;
  country?: string;
  settings: IUserSettings;
}

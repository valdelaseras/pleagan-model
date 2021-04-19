import { INotificationSettings } from "./notifications";

export interface IUserSettings {
  email: INotificationSettings;
  countryPrivate: boolean;
  theme: THEME;
}

export enum THEME {
  DEFAULT,
  BEAN,
  OCEAN,
}

import { IDevice, INotificationSettings } from "./notifications";

export interface IUserSettings {
  email: INotificationSettings;
  push: IDevice[];
  countryPrivate: boolean;
  theme: THEME;
}

export enum THEME {
  DEFAULT,
  BEAN,
  OCEAN,
}

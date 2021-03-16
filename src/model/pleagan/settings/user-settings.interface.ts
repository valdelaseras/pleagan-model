import { INotificationSettings } from "../../../index";

export interface IUserSettings {
  notifications: {
    push: INotificationSettings;
    email: INotificationSettings;
  };
  countryPrivate: boolean;
  theme: THEME;
}

export enum THEME {
  DEFAULT,
  BEAN,
  OCEAN,
}

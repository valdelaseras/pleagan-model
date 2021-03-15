import { INotificationSettings } from "../../../index";

export interface IUserSettings {
  notifications: {
    push: INotificationSettings;
    email: INotificationSettings;
  };
  theme: THEME;
}

export enum THEME {
  DEFAULT,
  BEAN,
  OCEAN,
}

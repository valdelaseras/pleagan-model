import { INotificationSettings } from "../../../index";
import { IDevice } from "./notifications/device.interface";

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

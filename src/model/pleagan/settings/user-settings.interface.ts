import { INotificationSettings } from "../../../index";
import { Device } from "./notifications/device.interface";

export interface IUserSettings {
  email: INotificationSettings;
  push: Device[];
  countryPrivate: boolean;
  theme: THEME;
}

export enum THEME {
  DEFAULT,
  BEAN,
  OCEAN,
}

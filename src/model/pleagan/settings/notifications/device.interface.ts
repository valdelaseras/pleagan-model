import { INotificationSettings } from "./notification-settings.interface";

export interface IDevice {
  token: string;
  uuid: string;
  settings: INotificationSettings;
}

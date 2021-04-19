import { INotificationSettings } from "../settings/notifications/notification-settings.interface";

export interface IDevice {
  token: string;
  uuid: string;
  settings: INotificationSettings;
}

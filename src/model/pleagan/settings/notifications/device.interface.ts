import { INotificationSettings } from './notification-settings.interface';

export interface Device {
    token: string;
    uuid: string;
    settings: INotificationSettings;
}

export interface INotificationSettings {
  myPleas: {
    onThreshold: boolean;
    onCompliance: boolean;
  };
  supportedPleas: {
    onThreshold: boolean;
    onCompliance: boolean;
  };
  otherPleas: {
    onNew: boolean;
    onLocation: boolean;
  };
  news: boolean;
}

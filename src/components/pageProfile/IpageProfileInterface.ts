export interface ImapStateToPropsPageProfile {
  activeUser: {
    active: boolean;
    name: string;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
  userProfile: null | {
    name: string;
    active: boolean;
    subscribers: Array<string>;
    subscription: Array<string>;
  };
}

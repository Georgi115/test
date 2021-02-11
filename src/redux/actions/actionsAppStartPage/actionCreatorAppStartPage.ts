import {
  onClickBtnPosts,
  clickLikePost,
  exitApp,
  deletePost,
  goToProfile,
  toFeed,
} from "./typeAction";

import {
  IonClickBtnPosts,
  IexitApp,
  IgoToProfile,
  IclickLikePost,
  IdeletePost,
  ItoFeed,
  user,
  post,
} from "./InterfaceActionAppStartPage";

export const ONCLICKBTNPOSTS = (optionPosts: string): IonClickBtnPosts => {
  return {
    type: onClickBtnPosts,
    payload: optionPosts,
  };
};

export const CLICKLIKEPOST = (activeUser: user, post: post): IclickLikePost => {
  return {
    type: clickLikePost,
    activeUser,
    post,
  };
};

export const EXITAPP = (nav: any): IexitApp => {
  return {
    type: exitApp,
    nav,
  };
};

export const DELETEPOST = (post: post): IdeletePost => {
  return {
    type: deletePost,
    post,
  };
};

export const GOTOPROFILE = (nav: any, user: user): IgoToProfile => {
  return {
    type: goToProfile,
    nav,
    user,
  };
};

export const TOFEED = (nav: any): ItoFeed => {
  return {
    type: toFeed,
    nav,
  };
};

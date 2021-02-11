import { enterApp } from "../actions/actionsAuthorization/typeAction";
import { onClickBtnPosts } from "../actions/actionsAppStartPage/typeAction";
import { initialState } from "../../redux/initialState/initialStateAppStartPage/initialStateAppStartPage";
import { clickLikePost } from "../actions/actionsAppStartPage/typeAction";
import { exitApp } from "../actions/actionsAppStartPage/typeAction";
import { deletePost } from "../actions/actionsAppStartPage/typeAction";
import { goToProfile } from "../actions/actionsAppStartPage/typeAction";
import { toFeed } from "../actions/actionsAppStartPage/typeAction";
import {
  IstateStartPageReducer,
  ActionAppStartReducer,
} from "../actions/actionsAppStartPage/InterfaceActionAppStartPage";

const localState = localStorage.getItem("state");

let objState: IstateStartPageReducer;
if (localState) {
  objState = JSON.parse(localState).appStartPageReducer;
} else {
  objState = initialState;
}

export default function appStartPageReducer(
  state = objState,
  action: ActionAppStartReducer
) {
  switch (action.type) {
    case enterApp:
      let newUser;
      const users = state.users.slice();
      const user = users.find((el: any, id: any) => {
        if (el.name === action.payload) {
          users[id].active = true;
          return el;
        }
        return undefined;
      });
      if (!user) {
        newUser = {
          name: action.payload,
          subscription: [],
          subscribers: [],
          likePost: [],
          active: true,
        };
        users.push(newUser);
      }

      return {
        ...state,
        users: users,
        activeUser: newUser || user,
        userProfile: null,
      };
    case onClickBtnPosts:
      return {
        ...state,
        viewPosts: action.payload,
      };

    case clickLikePost:
      const allPosts = state.allPosts.slice();
      const idxPost = allPosts.findIndex(
        (el: any) =>
          el.authorPost === action.post.authorPost && el.id === action.post.id
      );
      const findLike = allPosts[idxPost].likePost.find(
        (el: any) => el === action.activeUser.name
      );
      if (findLike === undefined) {
        allPosts[idxPost].likePost.push(action.activeUser.name);
      } else {
        allPosts[idxPost].likePost.forEach((el: any, id: any) =>
          el === action.activeUser.name
            ? allPosts[idxPost].likePost.splice(id, 1)
            : null
        );
      }

      return {
        ...state,
        activeUser: action.activeUser,
        allPosts: allPosts,
      };
    case exitApp:
      action.nav.push("/");
      return {
        ...state,
        activeUser: null,
      };
    case deletePost:
      const deletePostIsAllPost = state.allPosts.slice();
      const idPost = deletePostIsAllPost.findIndex(
        (el: any) =>
          el.authorPost === action.post.authorPost && el.id === action.post.id
      );

      deletePostIsAllPost.splice(idPost, 1);
      return {
        ...state,
        allPosts: deletePostIsAllPost,
      };

    case goToProfile:
      action.nav.push("/profile");
      return {
        ...state,
        userProfile: action.user,
      };

    case toFeed:
      action.nav.push("/startPage");
      return {
        ...state,
        userProfile: null,
      };
    default:
      return {
        ...state,
        userProfile: null,
      };
  }
}

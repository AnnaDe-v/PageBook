import { Dispatch } from "redux";
import {PostType} from "../../../types";
import {v4 as uuidv4} from "uuid";
import { ThunkDispatch } from "redux-thunk";
import {setLayoutStatusAC} from "../../layout/layout-reducer";


export const initialState: PostType[] = []

export const postsReducer = (state: PostType[] = initialState, action: ActionsType): PostType[] => {
  switch (action.type) {
    case "POSTS/GET-POSTS":
      return action.posts.map(p => ({...p}))
    default:
      return { ...state };
  }
};



export const getPostsAC = (posts: PostType[]) =>
  ({ type: "POSTS/GET-POSTS", posts } as const);


export type GetPostsActionType = ReturnType<typeof getPostsAC>;

type ActionsType = GetPostsActionType;


// thunks

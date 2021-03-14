import { ActionTypes, PostsState, Action } from "../types";

export const INITIAL_STATE: PostsState = {
  data: [],
  error: null,
  isLoading: true,
};

const PostsReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case ActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        isLoading: false,
      };
    case ActionTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default PostsReducer;

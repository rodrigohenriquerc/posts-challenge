import { ActionTypes, CommentsState, Action } from '../types'

export const INITIAL_STATE: CommentsState = {
  data: [],
  error: null,
  isLoading: true,
}

const CommentsReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_COMMENTS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      }
    case ActionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        isLoading: false,
      }
    case ActionTypes.GET_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      }
    default:
      return state
  }
}

export default CommentsReducer

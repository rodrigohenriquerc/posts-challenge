import { ActionTypes, UsersState, Action } from '../types'

export const INITIAL_STATE: UsersState = {
  data: [],
  error: null,
  isLoading: true,
}

const UsersReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      }
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        isLoading: false,
      }
    case ActionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      }
    default:
      return state
  }
}

export default UsersReducer

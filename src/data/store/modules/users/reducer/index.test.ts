import UsersReducer, { INITIAL_STATE } from '.'
import {
  ActionTypes,
  RequestAction,
  SuccessAction,
  FailureAction,
} from '../types'
import { User } from 'domains/users/models'

describe('UsersReducer', () => {
  it('should return default state', () => {
    const action = { type: 'any' }
    const state = UsersReducer(undefined, action)
    expect(state).toStrictEqual(INITIAL_STATE)
  })
  it('should handle request action', () => {
    const action: RequestAction = {
      type: ActionTypes.GET_USERS_REQUEST,
    }
    const state = UsersReducer(INITIAL_STATE, action)
    expect(state).toStrictEqual(INITIAL_STATE)
  })
  it('should handle success action', () => {
    const user: User = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    }
    const action: SuccessAction = {
      type: ActionTypes.GET_USERS_SUCCESS,
      payload: {
        data: [user],
      },
    }
    const state = UsersReducer(INITIAL_STATE, action)
    expect(state.data).toHaveLength(1)
    expect(state.data[0]).toStrictEqual(user)
    expect(state.error).toBe(null)
    expect(state.isLoading).toBe(false)
  })
  it('should handle failure action', () => {
    const action: FailureAction = {
      type: ActionTypes.GET_USERS_FAILURE,
      payload: {
        error: 'error',
      },
    }
    const state = UsersReducer(INITIAL_STATE, action)
    expect(state.error).toBe('error')
    expect(state.isLoading).toBe(false)
  })
})

import * as Actions from '.'
import { ActionTypes } from '../types'
import { User } from 'domains/users/models'

describe('Request action', () => {
  it('should return the right type', () => {
    const action = Actions.GetUsersRequest()
    expect(action.type).toBe(ActionTypes.GET_USERS_REQUEST)
  })
})

describe('Success action', () => {
  it('should return the right type and payload', () => {
    const data: User[] = [
      {
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
      },
    ]
    const action = Actions.GetUsersSuccess(data)
    expect(action.type).toBe(ActionTypes.GET_USERS_SUCCESS)
    expect(action.payload).toStrictEqual({ data })
  })
})

describe('Failure action', () => {
  it('should return the right type and payload', () => {
    const error = 'error'
    const action = Actions.GetUsersFailure(error)
    expect(action.type).toBe(ActionTypes.GET_USERS_FAILURE)
    expect(action.payload).toStrictEqual({ error })
  })
})

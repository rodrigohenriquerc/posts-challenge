import { GetCommentsProtocol } from 'data/http/services'
import { GetComments } from 'domains/posts/usecases'
import { adaptData } from './Adapter'

const receivedData: GetCommentsProtocol.Data = [
  {
    id: 1,
    postId: 5,
    name: 'random_name',
    body: 'random_body',
    email: 'random_email',
  },
]

const desiredData: GetComments.Data = [
  {
    id: receivedData[0].id,
    author: receivedData[0].name,
    description: receivedData[0].body,
  },
]

describe('adaptData', () => {
  it('should transform data provided by the API into data the store is ready to receive', () => {
    expect(adaptData(receivedData)).toStrictEqual(desiredData)
  })
})

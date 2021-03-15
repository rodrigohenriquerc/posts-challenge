import { HttpClient } from 'data/http/protocol'
import { GetCommentsProtocol } from './protocol'

export const getComments = async (
  params: GetCommentsProtocol.Params,
  httpClient: HttpClient
): Promise<GetCommentsProtocol.Data> => {
  try {
    const { data } = await httpClient({
      url: 'https://jsonplaceholder.api/comments',
      method: 'get',
      params,
    })
    return data
  } catch (e) {
    throw new Error(e)
  }
}

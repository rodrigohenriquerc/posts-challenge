import { HttpClient } from 'data/http/protocol'
import { GetUsersProtocol } from './protocol'

export const getUsers = async (
  httpClient: HttpClient
): Promise<GetUsersProtocol.Data> => {
  try {
    const { data } = await httpClient({
      url: 'https://jsonplaceholder.api/users',
      method: 'get',
    })
    return data
  } catch (e) {
    throw new Error(e)
  }
}

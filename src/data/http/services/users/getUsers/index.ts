import { HttpClient } from 'data/http/protocol'
import { GetUsersProtocol } from './protocol'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getUsers = async (
  httpClient: HttpClient
): Promise<GetUsersProtocol.Data> => {
  try {
    const { data } = await httpClient({
      url: `${BASE_URL}/users`,
      method: 'get',
    })
    return data
  } catch (e) {
    throw new Error(e)
  }
}

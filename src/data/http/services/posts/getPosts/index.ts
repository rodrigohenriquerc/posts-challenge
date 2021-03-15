import { HttpClient } from 'data/http/protocol'
import { GetPostsProtocol } from './protocol'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getPosts = async (
  httpClient: HttpClient
): Promise<GetPostsProtocol.Data> => {
  try {
    const { data } = await httpClient({
      url: `${BASE_URL}/posts`,
      method: 'get',
    })
    return data
  } catch (e) {
    throw new Error(e)
  }
}

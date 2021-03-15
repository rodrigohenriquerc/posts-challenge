import { HttpClient } from 'data/http/protocol'
import { GetPostsProtocol } from './protocol'

export const getPosts = async (
  httpClient: HttpClient
): Promise<GetPostsProtocol.Data> => {
  try {
    const { data } = await httpClient({
      url: 'https://jsonplaceholder.api/posts',
      method: 'get',
    })
    return data
  } catch (e) {
    throw new Error(e)
  }
}

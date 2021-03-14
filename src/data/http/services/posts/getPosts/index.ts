import { HttpClient } from 'data/http/protocol'
import { Data } from './protocol'

export const getPosts = async (httpClient: HttpClient): Promise<Data> => {
  try {
    const { data } = await httpClient({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'get',
    })
    return data
  } catch (e) {
    throw new Error(e)
  }
}

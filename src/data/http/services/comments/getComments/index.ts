import { HttpClient } from 'data/http/protocol'
import { GetCommentsProtocol } from './protocol'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getComments = async (
  params: GetCommentsProtocol.Params,
  httpClient: HttpClient
): Promise<GetCommentsProtocol.Data> => {
  try {
    const { data } = await httpClient({
      url: `${BASE_URL}/comments`,
      method: 'get',
      params,
    })
    return data
  } catch (e) {
    throw new Error(e)
  }
}

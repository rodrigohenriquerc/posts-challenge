import axios from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from 'data/http/protocol'
import { handleHttpError } from 'data/http/error'

export const httpClient: HttpClient = async (
  request: HttpRequest
): Promise<HttpResponse> => {
  try {
    const response = await axios.request({
      url: request.url,
      method: request.method,
      params: request.params,
      headers: request.headers,
    })
    return {
      statusCode: response.status,
      data: response.data,
    }
  } catch (e) {
    throw new Error(handleHttpError(e.response.status))
  }
}

import axios from 'axios'
import faker from 'faker'
import { HttpRequest } from 'data/http/protocol'
import { handleHttpError } from 'data/http/error'
import { httpClient } from '.'

jest.mock('axios', () => ({
  request: jest.fn(),
}))

const mockRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
  params: faker.random.objectElement(),
  headers: faker.random.objectElement(),
})

const mockAxiosResponse = () => ({
  status: faker.random.number(),
  data: faker.random.objectElement(),
})

const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.request.mockClear().mockResolvedValue(mockAxiosResponse())
  return mockedAxios
}

describe('httpClient', () => {
  it('should call axios with the right values', () => {
    const request = mockRequest()
    const mockedAxios = mockAxios()
    httpClient(request)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      method: request.method,
      params: request.params,
      headers: request.headers,
    })
  })
  it('should return the response correctly', async () => {
    const request = mockRequest()
    const mockedAxios = mockAxios()
    const response = await httpClient(request)
    const axiosResponse = await mockedAxios.request.mock.results[0].value
    expect(response.statusCode).toBe(axiosResponse.status)
    expect(response.data).toBe(axiosResponse.data)
  })
  it('should handle error', () => {
    const request = mockRequest()
    const mockedAxios = mockAxios()
    const status = faker.random.number()
    mockedAxios.request.mockRejectedValueOnce({
      response: {
        status,
      },
    })
    const promise = httpClient(request)
    expect(promise).rejects.toThrowError(handleHttpError(status))
  })
})

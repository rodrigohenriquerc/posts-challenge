export interface HttpRequest {
  url: string
  method: HttpMethod
  params?: any
  headers?: any
}

export type HttpMethod = 'get' | 'post' | 'put' | 'delete'

export interface HttpResponse {
  statusCode: StatusCode
  data?: any
}

export enum StatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpClient = (httpRequest: HttpRequest) => Promise<HttpResponse>

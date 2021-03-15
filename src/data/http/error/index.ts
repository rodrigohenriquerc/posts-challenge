import { StatusCode } from 'data/http/protocol'

export const handleHttpError = (statusCode: number) => {
  const error: { [index: number]: string } = {
    [StatusCode.badRequest]: '400: Bad Request',
    [StatusCode.unauthorized]: '401: Unauthorized',
    [StatusCode.forbidden]: '403: Forbidden',
    [StatusCode.notFound]: '404: Not Found',
    [StatusCode.serverError]: '500: Internal Server Error',
  }

  return error[statusCode] || `${statusCode}: Unexpected Error`
}

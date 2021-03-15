import { handleHttpError } from '.'

describe('handleHttpError', () => {
  it('should handle error when status code 400', () => {
    const error = handleHttpError(400)
    expect(error).toBe('400: Bad Request')
  })
  it('should handle error when status code 401', () => {
    const error = handleHttpError(401)
    expect(error).toBe('401: Unauthorized')
  })
  it('should handle error when status code 403', () => {
    const error = handleHttpError(403)
    expect(error).toBe('403: Forbidden')
  })
  it('should handle error when status code 404', () => {
    const error = handleHttpError(404)
    expect(error).toBe('404: Not Found')
  })
  it('should handle error when status code 500', () => {
    const error = handleHttpError(500)
    expect(error).toBe('500: Internal Server Error')
  })
  it('should handle error when status code is unexpected', () => {
    const error = handleHttpError(0)
    expect(error).toBe('0: Unexpected Error')
  })
})

import { GetCommentsProtocol } from 'data/http/services'
import { GetComments } from 'domains/posts/usecases'

export const adaptData = (data: GetCommentsProtocol.Data): GetComments.Data => {
  return data.map((item: GetCommentsProtocol.Comment) => ({
    id: item.id,
    author: item.name,
    description: item.body,
  }))
}

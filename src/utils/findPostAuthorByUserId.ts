import { GetUsersProtocol } from 'data/http/services'

export const findPostAuthorByUserId = (
  userId: number,
  users: GetUsersProtocol.Data
): string => users.find((user) => user.id === userId)?.name || 'Sem nome'

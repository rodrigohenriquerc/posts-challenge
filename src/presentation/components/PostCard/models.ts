import { Comment } from 'domains/posts/models'

export interface IPostCard {
  id: number
  author: string
  title: string
  description: string
  comments: Comment[]
  onLoadComments: (id: number) => void
  openPostId: number | null
}

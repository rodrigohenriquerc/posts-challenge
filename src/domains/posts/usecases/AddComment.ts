export type AddComment = (newComment: NewComment) => Promise<boolean>

export interface NewComment {
  postId: number
  description: string
}

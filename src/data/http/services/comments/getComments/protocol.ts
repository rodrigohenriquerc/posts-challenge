export declare namespace GetCommentsProtocol {
  export interface Params {
    postId: number
  }
  export interface Comment {
    postId: number
    id: number
    name: string
    email: string
    body: string
  }
  export type Data = Comment[]
}

export type AddPost = (newPost: NewPost) => Promise<boolean>;

export interface NewPost {
  title: string;
  description: string;
}

import { Comment } from "./Comment";

export interface Post {
  id: number;
  author: string;
  title: string;
  description: string;
  comments: Comment[];
}

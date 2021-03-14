/* eslint-disable @typescript-eslint/no-redeclare */
import { Post } from "domains/posts/models";

export type GetPosts = () => Promise<GetPosts.Data>;

export declare namespace GetPosts {
  export type Data = Post[];
}

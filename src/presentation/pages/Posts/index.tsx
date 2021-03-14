import React from "react";
import { PostCard } from "../../components";
import { IPostCard } from "../../components/PostCard/models";
import { posts } from "./mocks.json";
import * as S from "./styles";

const Posts: React.FC = () => {
  return (
    <S.Container>
      <S.List>
        {posts.map((post: IPostCard) => (
          <S.ListItem>
            <PostCard
              author={post.author}
              avatar={post.avatar}
              title={post.title}
              description={post.description}
              image={post.image}
            />
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};

export default Posts;

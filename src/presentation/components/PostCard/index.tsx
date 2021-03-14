import React from "react";
import { IPostCard } from "./models";
import * as S from "./styles";

const PostCard: React.FC<IPostCard> = ({
  author,
  avatar,
  title,
  description,
  image,
}: IPostCard) => {
  return (
    <S.Container>
      <p>{author}</p>
      <S.Title>{title}</S.Title>
      <p>{description}</p>
    </S.Container>
  );
};

export default PostCard;

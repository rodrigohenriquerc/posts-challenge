import * as Actions from "./actions";
import { ActionTypes } from "../types";
import { Post } from "../../../../../domains/posts/models/Post";

describe("Request action", () => {
  it("should return the right type", () => {
    const action = Actions.GetPostsRequest();
    expect(action.type).toBe(ActionTypes.GET_POSTS_REQUEST);
  });
});

describe("Success action", () => {
  it("should return the right type and payload", () => {
    const data: Post[] = [
      {
        id: 1,
        author: "Rodrigo Henrique",
        title: "random_title",
        description: "random_description",
        comments: [],
      },
    ];
    const action = Actions.GetPostsSuccess(data);
    expect(action.type).toBe(ActionTypes.GET_POSTS_SUCCESS);
    expect(action.payload).toStrictEqual({ data });
  });
});

describe("Failure action", () => {
  it("should return the right type and payload", () => {
    const error = "error";
    const action = Actions.GetPostsFailure(error);
    expect(action.type).toBe(ActionTypes.GET_POSTS_FAILURE);
    expect(action.payload).toStrictEqual({ error });
  });
});

import { useDispatch } from 'react-redux'
import { GetPostsRequest, RemovePostRequest } from 'data/store/modules/posts/actions'

export default function usePostsDispatch() {
  const dispatch = useDispatch()

  const getPosts = () => {
    dispatch(GetPostsRequest())
  }

  const removePost = (postId: number) => {
    dispatch(RemovePostRequest({ postId }))
  }

  return { getPosts, removePost }
}

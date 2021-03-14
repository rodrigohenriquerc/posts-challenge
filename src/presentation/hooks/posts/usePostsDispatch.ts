import { useDispatch } from 'react-redux'
import { GetPostsRequest } from 'data/store/modules/posts/actions'

export default function usePostsDispatch() {
  const dispatch = useDispatch()

  const getPosts = () => {
    dispatch(GetPostsRequest())
  }

  return { getPosts }
}

import { useDispatch } from 'react-redux'
import { GetCommentsRequest } from 'data/store/modules/comments/actions'

export default function useCommentsDispatch() {
  const dispatch = useDispatch()

  const getComments = (postId: number) => {
    dispatch(GetCommentsRequest({ postId }))
  }

  return { getComments }
}

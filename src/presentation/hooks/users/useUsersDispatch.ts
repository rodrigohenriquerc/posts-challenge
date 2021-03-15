import { useDispatch } from 'react-redux'
import { GetUsersRequest } from 'data/store/modules/users/actions'

export default function useUsersDispatch() {
  const dispatch = useDispatch()

  const getUsers = () => {
    dispatch(GetUsersRequest())
  }

  return { getUsers }
}

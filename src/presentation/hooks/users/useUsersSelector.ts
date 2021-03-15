import { useStateSelector } from '../state/useStateSelector'

export default function useUsersSelector() {
  const { data, isLoading } = useStateSelector((state) => state.users)
  return { data, isLoading }
}

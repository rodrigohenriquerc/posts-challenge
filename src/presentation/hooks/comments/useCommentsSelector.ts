import { useStateSelector } from '../state/useStateSelector'

export default function useCommentsSelector() {
  const { data, isLoading } = useStateSelector((state) => state.comments)
  return { data, isLoading }
}

import { useStateSelector } from '../state/useStateSelector'

export default function usePostsSelector() {
  const { data, isLoading } = useStateSelector((state) => state.posts)
  return { data, isLoading }
}

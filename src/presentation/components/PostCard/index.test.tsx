import { render } from '@testing-library/react'
import PostCard from './index'
import { IPostCard } from './models'

describe('PostCard', () => {
  it('should render with author, title and description', () => {
    const props: IPostCard = {
      id: 1,
      author: 'Rodrigo Henrique',
      title: 'random_title',
      description: 'random_description',
    }
    const { getByTestId } = render(
      <PostCard
        id={props.id}
        author={props.author}
        title={props.title}
        description={props.description}
      />
    )
    const component = getByTestId('post-card')
    const author = component.children[0].children[1].textContent
    const title = component.children[1].textContent
    const description = component.children[2].textContent

    expect(author).toBe(props.author)
    expect(title).toBe(props.title)
    expect(description).toBe(props.description)
  })
})

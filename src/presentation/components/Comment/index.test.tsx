import React from 'react'
import { render } from '@testing-library/react'
import Comment from '.'
import { IComment } from './models'

describe('Comment', () => {
  it('should render with the right author and description', () => {
    const props: IComment = {
      id: 1,
      author: 'Tayanne Fernandes',
      description: 'random_description',
    }
    const { getByTestId } = render(
      <Comment
        id={props.id}
        author={props.author}
        description={props.description}
      />
    )
    const component = getByTestId('post-comment')
    const author = component.children[0].textContent
    const description = component.children[1].textContent
    expect(author).toBe(props.author)
    expect(description).toBe(props.description)
  })
})

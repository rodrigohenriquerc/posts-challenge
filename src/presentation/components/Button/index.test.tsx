import React from 'react'
import { render } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  it('should render with the right title', () => {
    const title = 'random_title'
    const element = render(<Button title={title} />)
    expect(element.baseElement.textContent).toBe(title)
  })
})

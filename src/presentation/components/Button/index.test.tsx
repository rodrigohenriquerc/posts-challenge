import React from 'react'
import { render } from 'utils/testConfig'
import Button from '.'

describe('Button', () => {
  it('should render with the right title', () => {
    const element = render(<Button title="random_title" />)
    expect(element.baseElement.textContent).toBe('random_title')
  })
})

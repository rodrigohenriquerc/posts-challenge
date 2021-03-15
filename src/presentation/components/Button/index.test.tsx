import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { AiFillMessage } from 'react-icons/ai'
import Button from '.'
import { IButton } from './models'

describe('Button', () => {
  it('should render with the right props', () => {
    const mockFn = jest.fn()
    const props: IButton = {
      title: 'random_title',
      type: 'ghost',
      icon: <AiFillMessage />,
      onClick: mockFn,
    }
    const { getByTestId } = render(
      <Button
        title={props.title}
        type={props.type}
        icon={props.icon}
        onClick={props.onClick}
      />
    )
    const button = getByTestId('button')
    const title = button.textContent
    const icon = button.children[0]

    expect(button).toHaveStyle('background-color: transparent;')
    expect(title).toBe(props.title)
    expect(icon).toBeTruthy()

    fireEvent.click(button)
    expect(mockFn).toHaveBeenCalled()
  })
  it('should render when no type is passed', () => {
    const mockFn = jest.fn()
    const props: IButton = {
      title: 'random_title',
      type: 'normal',
      onClick: mockFn,
    }
    const { getByTestId } = render(
      <Button title={props.title} onClick={props.onClick} />
    )
    const button = getByTestId('button')
    const title = button.textContent

    expect(button).toHaveStyle('height: 3rem;')
    expect(title).toBe(props.title)
  })
})

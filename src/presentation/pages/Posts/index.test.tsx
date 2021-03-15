import React from 'react'
import { storeFactory } from 'setupTests'
import { renderWithRedux } from 'utils/testConfig'
import { INITIAL_STATE } from 'data/store/modules/posts/reducer'
import { PostsState } from 'data/store/modules/posts/types'
import Posts from '.'

interface SystemUnderTest {
  mockStore: any
  createWrapper: any
}

const sut: SystemUnderTest = {
  mockStore: {},
  createWrapper: {},
}

const mockStore = (postsState?: PostsState) =>
  storeFactory({
    posts: postsState || INITIAL_STATE,
  })

describe('Posts', () => {
  beforeEach(() => {
    sut.mockStore = mockStore
    sut.createWrapper = (store: any) => renderWithRedux(<Posts />, { store })
  })
  it('should render properly', () => {
    const store = sut.mockStore()
    const wrapper = sut.createWrapper(store)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render loading UI when data is loading', () => {
    const store = sut.mockStore()
    const wrapper = sut.createWrapper(store)
    const loadingUI = wrapper.queryByTestId('loading-ui')
    expect(loadingUI).toBeTruthy()
  })
})

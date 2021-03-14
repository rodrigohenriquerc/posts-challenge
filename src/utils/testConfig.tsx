import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { storeFactory } from 'setupTests'

function renderWithRedux(
  ui: React.ReactElement,
  { store = storeFactory(), ...renderOptions }: any = {}
) {
  function Wrapper({ children }: { children: React.ComponentType }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, {
    wrapper: Wrapper as React.ComponentType,
    ...renderOptions,
  })
}

export * from '@testing-library/react'

export { renderWithRedux }

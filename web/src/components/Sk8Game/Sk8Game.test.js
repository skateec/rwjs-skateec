import { render } from '@redwoodjs/testing/web'

import Sk8Game from './Sk8Game'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Sk8Game', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sk8Game />)
    }).not.toThrow()
  })
})

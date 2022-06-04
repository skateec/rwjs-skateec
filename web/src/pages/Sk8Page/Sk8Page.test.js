import { render } from '@redwoodjs/testing/web'

import Sk8Page from './Sk8Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Sk8Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sk8Page />)
    }).not.toThrow()
  })
})

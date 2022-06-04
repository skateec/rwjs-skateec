import { render } from '@redwoodjs/testing/web'

import LoungePage from './LoungePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoungePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoungePage />)
    }).not.toThrow()
  })
})

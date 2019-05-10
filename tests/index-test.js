import expect from 'expect'
import React from 'react'
import styled from "styled-components"
import {renderToStaticMarkup as render} from 'react-dom/server'

import lost from 'src/'

const Div13 = styled.div`
  ${lost.column(`1/3`)};
`

describe('Div13', () => {
  it('renders a div with a specific width', () => {
    expect(render(<Div13>Test</Div13>))
      .toContain('</div>')
  })
})

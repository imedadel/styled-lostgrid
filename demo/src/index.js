import React from 'react'
import {render} from 'react-dom'
import styled from "styled-components"

import lost from '../../src'

const Div1 = styled.div`
  ${lost.column(`2/3`)};
`
const Div2 = styled.div`
  ${lost.column(`1/3`)};
`

const Demo = () => (
  <div>
    <Div1>
      One
    </Div1>
    <Div2>
      Two
    </Div2>
  </div>
)

render(<Demo/>, document.querySelector('#demo'))

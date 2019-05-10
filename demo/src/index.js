import React from 'react'
import {render} from 'react-dom'
import styled from "styled-components"

import lost from '../../src'


const BDiv = styled.div`
  background-color: palevioletred;
  color: white;
`
const Div23 = styled(BDiv)`
  ${lost.column(`2/3`)};
`
const Div13 = styled(BDiv)`
  ${lost.column(`1/3`)};
`

const Demo = () => (
  <div>
    <Div23>
      <pre>{lost.column(`2/3`)}</pre>
    </Div23>
    <Div13>
    <pre>{lost.column(`1/3`)}</pre>
    </Div13>
  </div>
)

render(<Demo/>, document.querySelector('#demo'))

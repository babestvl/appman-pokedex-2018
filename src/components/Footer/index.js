import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 50px;
  background-color: #ec5656;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
`

const Footer = () => (
  <Wrapper>
    Footer
  </Wrapper>
)

export default Footer

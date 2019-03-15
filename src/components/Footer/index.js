import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 50px;
  background-color: #ec5656;
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
`

const Button = styled.div`
  border: 20px solid #ec5656;
  border-radius: 10px;
  cursor: pointer;
`

const Footer = ({ handleOpenModal }) => (
  <Wrapper>
    <Button onClick={handleOpenModal}>+</Button>
  </Wrapper>
)

export default Footer

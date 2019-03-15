import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ec5656;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`

const Button = styled.div`
  width: 90px;
  background-color: #ec5656;
  border: 4px solid #ec5656;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  text-align: center;
`

const StyledSpan = styled.span`
  font-size: 54px;
  color: #fff;
  background-color: #ec5656;
`

const Footer = ({ handleOpenModal }) => (
  <Wrapper>
    <Button onClick={handleOpenModal}>
      <StyledSpan>+</StyledSpan>
    </Button>
  </Wrapper>
)

export default Footer

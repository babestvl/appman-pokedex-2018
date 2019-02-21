import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 250px;
  width: 100%;
  padding: 8px;
  background-color: #d5d6dc;
`

const CardInfo = ({ card }) => {
  console.log(card)
  return <Wrapper>Info</Wrapper>
}

export default CardInfo

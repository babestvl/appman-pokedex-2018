import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 250px;
  width: 100%;
  padding: 8px;
  background-color: #f3f4f7;
`

const CardInfo = ({ card }) => {
  console.log(card)
  return <Wrapper>Info</Wrapper>
}

export default CardInfo

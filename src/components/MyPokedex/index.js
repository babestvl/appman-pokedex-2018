import React from 'react'
import styled from 'styled-components'
import CardInfo from '../CardInfo'

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 16px;
  margin-top: 80px;
  padding: 16px 16px 66px 16px;
`

const MyPokedex = ({ cards }) => (
  <Wrapper>
    {cards.map(card => (
      <CardInfo card={card} key={cards.id} />
    ))}
  </Wrapper>
)

export default MyPokedex

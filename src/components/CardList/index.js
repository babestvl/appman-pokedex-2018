import React from 'react'
import styled from 'styled-components'
import CardInfo from '../CardInfo'

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 16px;
  padding: 16px 16px 66px 16px;
`

const CardList = ({ cards }) => (
  <Wrapper>
    {cards.map((card, index) => (
      <CardInfo card={card} key={index} />
    ))}
  </Wrapper>
)

export default CardList

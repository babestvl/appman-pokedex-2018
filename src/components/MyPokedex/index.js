import React from 'react'
import styled from 'styled-components'
import CardInfo from '../CardInfo'

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  padding: 16px;
  margin: 80px 0;
`

const MyPokedex = ({ cards, removeCardFromDeck }) => (
  <ListGrid>
    {cards.map((card, index) => (
      <CardInfo
        card={card}
        key={index}
        handleOnClick={removeCardFromDeck}
        actionText="X"
      />
    ))}
  </ListGrid>
)

export default MyPokedex

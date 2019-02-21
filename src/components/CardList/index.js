import React from 'react'
import styled from 'styled-components'
import CardInfo from '../CardInfo'

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  padding: 16px;
`

const CardList = ({ cards }) => (
  <ListGrid>
    {cards.map(card => (
      <CardInfo card={card} key={cards.id} />
    ))}
  </ListGrid>
)

export default CardList

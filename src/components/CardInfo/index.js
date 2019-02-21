import React from 'react'
import styled from 'styled-components'
import { Line } from 'rc-progress'

const Img = styled.img`
  height: 100%;
`

const Wrapper = styled.div`
  height: 250px;
  width: 100%;
  padding: 8px;
  display: grid;
  grid-template-columns: 180px 1fr;
  background-color: #f3f4f7;
  box-shadow: 1px 1px 5px #d5d6dc;
  &:hover {
    box-shadow: 1px 1px 5px #aeaeae;
  }
`

const Content = styled.div`
  padding: 8px;
`

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const Title = styled.span`
  font-size: 36px;
  font-family: 'Gaegu';
`

const Bar = styled.div`
  width: ${props => (props.twoColumns ? '250px' : '120px')};
  height: 20px;
`

const Name = styled.span`
  width: 24px;
  margin-right: 36px;
`

const CardInfo = ({ card, twoColumns = false }) => {
  let hp = card.hp
  let str = 0
  let weak = 0
  let damage = 0
  let happiness = 0
  if (hp === 'None') {
    hp = 0
  } else if (hp > 100) {
    hp = 100
  }
  if (card.attacks) {
    str = card.attacks.length * 50
    weak = card.weaknesses.length * 100 || 0
    damage = card.attacks
      .map(attack => {
        if (attack.damage.match(/\d+/)) {
          return +attack.damage.match(/\d+/)[0]
        }
        return 0
      })
      .reduce((accum, currentValue) => accum + currentValue)
    happiness = (hp / 10 + damage / 10 + 10 - weak) / 5
  }

  return (
    <Wrapper>
      <Img src={card.imageUrl} />
      <Content>
        <Title>{card.name}</Title>
        <Info>
          <Name>HP</Name>
          <Bar twoColumns={twoColumns}>
            <Line
              percent={hp}
              strokeWidth="20"
              strokeColor="#f3701a"
              trailWidth="20"
              trailColor="#e4e4e4"
            />
          </Bar>
        </Info>
        <Info>
          <Name>STR</Name>
          <Bar twoColumns={twoColumns}>
            <Line
              percent={str}
              strokeWidth="20"
              strokeColor="#f3701a"
              trailWidth="20"
              trailColor="#e4e4e4"
            />
          </Bar>
        </Info>
        <Info>
          <Name>WEAK</Name>
          <Bar twoColumns={twoColumns}>
            <Line
              percent={weak}
              strokeWidth="20"
              strokeColor="#f3701a"
              trailWidth="20"
              trailColor="#e4e4e4"
            />
          </Bar>
        </Info>
      </Content>
    </Wrapper>
  )
}

export default CardInfo

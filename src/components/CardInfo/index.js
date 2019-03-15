import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Info from './Info'

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

const Title = styled.span`
  font-size: 36px;
  font-family: 'Gaegu';
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardAction = styled.span`
  font-size: 24px;
  color: #dc7777;
  cursor: pointer;
`

class CardInfo extends PureComponent {
  state = {
    isHover: false,
  }

  handleMouseEnter = () => {
    this.setState({ isHover: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHover: false })
  }

  render() {
    const { card, actionText, handleOnClick } = this.props
    const { isHover } = this.state

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
      <Wrapper
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Img src={card.imageUrl} />
        <Content>
          <TitleRow>
            <Title>{card.name}</Title>
            {isHover && (
              <CardAction onClick={() => handleOnClick(card)}>
                {actionText}
              </CardAction>
            )}
          </TitleRow>
          <Info text="HP" value={hp} />
          <Info text="STR" value={str} />
          <Info text="WEAK" value={weak} />
        </Content>
      </Wrapper>
    )
  }
}

export default CardInfo

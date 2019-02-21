import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardApi from './lib/CardApi'
import CardList from './components/CardList'

const AppWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`
class App extends Component {
  state = {
    cardList: [],
  }

  async componentDidMount() {
    const allCards = await CardApi.getAll()
    console.log(allCards)
    this.setState({ cardList: allCards })
  }

  render() {
    const { cardList } = this.state
    console.log(cardList)
    return (
      <AppWrapper>
        <CardList cards={cardList} />
      </AppWrapper>
    )
  }
}

export default App

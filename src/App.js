import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardApi from './lib/CardApi'
import MyPokedex from './components/MyPokedex'
import CardList from './components/CardList'
import Footer from './components/Footer'

const AppWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`

const Title = styled.h1`
  position: absolute;
  top: 0;
  width: 100%;
  margin: 0 0 50px 0;
  padding-top: 16px;
  text-align: center;
  background-color: red;
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
        <Title>My Pokedex</Title>
        <MyPokedex cards={cardList} />
        <Footer />
      </AppWrapper>
    )
  }
}

export default App

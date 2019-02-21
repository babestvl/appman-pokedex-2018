import React, { Component } from 'react'
import styled from 'styled-components'
import CardApi from './lib/CardApi'
import MyPokedex from './components/MyPokedex'
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
  background-color: #fff;
`

class App extends Component {
  state = {
    cardList: [],
  }

  async componentDidMount() {
    const allCards = await CardApi.getAll()
    this.setState({ cardList: allCards })
  }

  render() {
    const { cardList } = this.state

    return (
      <AppWrapper id="app">
        <Title>My Pokedex</Title>
        <MyPokedex cards={cardList} />
        <Footer cards={cardList} />
      </AppWrapper>
    )
  }
}

export default App

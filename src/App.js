import React, { Component } from 'react'
import styled from 'styled-components'
import CardApi from './lib/CardApi'
import MyPokedex from './components/MyPokedex'
import Footer from './components/Footer'
import CardModal from './components/CardModal'

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
    myDeck: [],
    keyword: '',
    showModal: false,
  }

  fetchCards = async keyword => {
    const { myDeck } = this.state
    const cards = await CardApi.fetchCards(keyword)
    const remainCards = cards.filter(
      item => myDeck.findIndex(card => item.id === card.id) === -1,
    )
    this.setState({ cardList: remainCards })
  }

  handleOpenModal = () => {
    const { keyword } = this.state
    this.fetchCards(keyword)
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  handleOnChangeKeyword = ({ target: { value } }) => {
    this.setState({ keyword: value })
    this.fetchCards(value)
  }

  addCardToDeck = card => {
    const { myDeck, cardList } = this.state
    const remainCards = cardList.filter(item => item.id !== card.id)
    this.setState({ myDeck: [...myDeck, card], cardList: remainCards })
  }

  removeCardFromDeck = card => {
    const { myDeck } = this.state
    const newDeck = myDeck.filter(item => item.id !== card.id)
    this.setState({ myDeck: newDeck })
  }

  render() {
    const { showModal, cardList, myDeck, keyword } = this.state

    return (
      <AppWrapper id="app">
        <Title>My Pokedex</Title>
        <MyPokedex cards={myDeck} removeCardFromDeck={this.removeCardFromDeck} />
        <Footer handleOpenModal={this.handleOpenModal} />
        <CardModal
          cards={cardList}
          keyword={keyword}
          search={this.search}
          showModal={showModal}
          handleCloseModal={this.handleCloseModal}
          handleOnChangeKeyword={this.handleOnChangeKeyword}
          addCardToDeck={this.addCardToDeck}
        />
      </AppWrapper>
    )
  }
}

export default App

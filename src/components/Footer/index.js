import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import SearchIcon from '../../icon/search.png'
import CardList from '../CardList'
import './footer.css'

Modal.setAppElement('#root')

const Wrapper = styled.div`
  height: 50px;
  background-color: #ec5656;
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
`

const StyledModal = styled(Modal)`
  margin: 32px;
  overflow: auto;
  outline: none;
`

const Button = styled.div`
  border: 20px solid #ec5656;
  border-radius: 10px;
  cursor: pointer;
`

const Searchbar = styled.div`
  display: flex;
  margin: 16px;
  border: 1px solid #e6e6e6;
  height: 42px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 24px;
  font-family: 'Gaegu';
`

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`

class Footer extends PureComponent {
  state = {
    showModal: false,
    text: '',
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  getParent() {
    return document.querySelector('#app')
  }

  handleOnChange = ({ target: { value } }) => {
    this.setState({ text: value })
  }

  render() {
    const { showModal, text } = this.state
    const { cards } = this.props
    return (
      <Wrapper>
        <Button onClick={this.handleOpenModal}>+</Button>
        <StyledModal
          isOpen={showModal}
          onRequestClose={this.handleCloseModal}
          parentSelector={this.getParent}
          className="Modal"
          overlayClassName="Overlay"
        >
          <Searchbar>
            <StyledInput value={text} onChange={this.handleOnChange} />
            <StyledImg src={SearchIcon} />
          </Searchbar>
          <CardList cards={cards} />
        </StyledModal>
      </Wrapper>
    )
  }
}

export default Footer

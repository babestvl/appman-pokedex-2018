import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import CardList from '../CardList'
import SearchIcon from '../../icon/search.png'
import './modal.css'

Modal.setAppElement('#root')

const getParent = () => {
  return document.querySelector('#app')
}

const StyledModal = styled(Modal)`
  margin: 32px;
  overflow: auto;
  outline: none;
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

const CardModal = ({
  showModal,
  handleCloseModal,
  cards,
  keyword,
  handleOnChangeKeyword,
}) => (
  <StyledModal
    isOpen={showModal}
    onRequestClose={handleCloseModal}
    parentSelector={getParent}
    className="Modal"
    overlayClassName="Overlay"
  >
    <Searchbar>
      <StyledInput value={keyword} onChange={handleOnChangeKeyword} />
      <StyledImg src={SearchIcon} />
    </Searchbar>
    <CardList cards={cards} />
  </StyledModal>
)

export default CardModal

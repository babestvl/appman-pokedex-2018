import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
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
  width: 400px;
  height: 800px;
`

const Button = styled.div`
  border: 20px solid #ec5656;
  border-radius: 10px;
  cursor: pointer;
`

class Footer extends PureComponent {
  state = {
    isOpen: false,
  }

  handleOnClick = () => (
    this.setState({ isOpen: !this.state.isOpen })
  )

  render() {
    return (
      <Wrapper>
        <Button onClick={this.handleOnClick}>+</Button>
        <StyledModal
          isOpen={this.state.isOpen}
          className="Modal"
          overlayClassName="Overlay"
        >
          Hello
        </StyledModal>
      </Wrapper>
    )
  }
}

export default Footer

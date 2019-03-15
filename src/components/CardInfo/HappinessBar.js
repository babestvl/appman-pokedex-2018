import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import CuteImg from '../../icon/cute.png'

const StyledImg = styled.img`
  width: 35px;
  margin-right: 2px;
  margin-top: 4px;
`

const HappinessBar = ({ times }) => (
  <div>
    {_.times(times, i => (
      <StyledImg src={CuteImg} key={i} />
    ))}
  </div>
)

export default HappinessBar

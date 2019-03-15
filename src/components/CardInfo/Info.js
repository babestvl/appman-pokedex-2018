import React from 'react'
import styled from 'styled-components'
import { Line } from 'rc-progress'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const Bar = styled.div`
  width: 120px;
  height: 20px;
`

const Name = styled.span`
  width: 24px;
  margin-right: 36px;
`

const Info = ({ text, value }) => (
  <Wrapper>
    <Name>{text}</Name>
    <Bar>
      <Line
        percent={value}
        strokeWidth="20"
        strokeColor="#f3701a"
        trailWidth="20"
        trailColor="#e4e4e4"
      />
    </Bar>
  </Wrapper>
)

export default Info

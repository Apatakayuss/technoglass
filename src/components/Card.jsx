import React from 'react'
import { styled } from 'styled-components'

const Card = ({Header, text, box}) => {
  return (
    <CardWrap>
        <CapitalText>
            {Header}
        </CapitalText>

        <DescText>
            {text}
        </DescText>

        <Box>
            
        </Box>
    </CardWrap>
  )
}

export default Card

const CardWrap = styled.div`
width: 100%;
height: 300px;
background-color: bisque;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const CapitalText = styled.h1`
    color: green;
`
const DescText = styled.p`
    color: green;
    margin-top: 30px;
    margin-bottom: 30px;
`
const Box = styled.div`
    background-color: blue;
    display: flex;

`
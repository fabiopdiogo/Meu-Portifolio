import React from 'react';

import styled from 'styled-components';


const Div1 = styled.section`
  background-color: orange;  
  &:hover{
    transform: translateY(-5px);   
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
`

const Image = styled.img`  
  width: 100%;  
  
  @media(max-width:1100px){
    object-fit: cover;
    max-height: 150px;
  } 
`

const Text = styled.p`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;  
`
const A = styled.a`
  &:link{
    text-decoration: none;
  }
`
interface Props {
  src: string;
  name?: string;
  href?: string;
}

function Card({src , name, href}: Props){
  return(
    <Div1>
      <A rel="stylesheet" href={href} target="_blank">
      <Image src={src}/>
      <Text>{name}</Text>
      </A>
    </Div1>
  )
}

export default Card;
import React from 'react';

import styled from 'styled-components';
import Shortcut from './Elements/Shortcut';

const DivMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  height: 100vh;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width:1100px){
    display: none;
  }
`
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;    
  width: 100%;
  gap: 5px;
`

const Socials = styled.span`
  display: flex;
  align-items: center;  
  justify-content: center;
  gap: 5px;
`
const Image = styled.img`
  width: 24px;
  height:24px;
`
const A = styled.a`
  display: flex;
  align-items: center;  
  justify-content: center;
  border-block: solid;
  writing-mode: horizontal-tb;
  border-color: orange;   
  width: 100%;  
  color: #ececec;  
  &:link{
    text-decoration: none;
  }
`
const Open = styled.img`
  display: none;
  
  @media(max-width:1100px){
  display:flex;
  position: absolute;
  top: 1px;
  right: 1px;
  padding: 20px;
  cursor: pointer;
  }
`

function Column ({setMenuIsVisible}){

  return(   
    <>
      <Open src="./Menu/menu-squared-50.png" onClick={() => setMenuIsVisible(true)}/>
      <DivMain>
          <A href="#beginning">Inicio</A>
          <ButtonsDiv>
                <Shortcut href="#about">Sobre</Shortcut>
                <Shortcut href="#skills">Minhas Skills</Shortcut>
                <Shortcut href="#projects">Projetos</Shortcut>
                <Shortcut href="#contact">Contato</Shortcut>
          </ButtonsDiv>

          <Socials>
            <a href="https://github.com/fabiopdiogo" target="_blank"><Image src="./Socials/icons8-github-orange.png" /></a>
            <a href="https://www.linkedin.com/in/fabio-diogo/" target="_blank"><Image src="./Socials/icons8-linkedin-orange.png"/></a>
          </Socials>
      </DivMain>
    </>

  )
}
export default Column
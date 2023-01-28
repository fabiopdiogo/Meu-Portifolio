import React from 'react';

import styled from 'styled-components'

import Projects from './Sections/Projects';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Contact from './Sections/Contact'

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  height: 100vh;
  padding: 0px 45px;
  gap: 20px;    
  
  &:before, &:after{
    content: '';
    margin: auto;
  }    

  p{
    font-size: 20px;
  }

`
const H1 = styled.h1`
  font-size:85px;  
  color: orange;

  @media (max-width: 676px){
    font-size:45px;  
  }
`
const H2 = styled.h2`
`

function Content (){

  return(
    <PostContainer>      
      <a id="beginning">
      <H1>Olá<br/>
        Eu sou o Fábio.<br/> 
      </H1></a>
      <H2>Desenvolverdor Front End</H2>     
      <About id="about"/>
      <Projects id="projects" />     
      <Skills id="skills"/>
      <Contact id="contact"/>      
    </PostContainer>
  )
}

export default Content
import React from 'react';

import styled from 'styled-components';

import Cards from '../Elements/Cards';

const H1 = styled.h1`
  font-size:85px;
  color: orange;

  @media (max-width: 676px){
    font-size:45px;  
  }
`
const DivMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%; 
`

const CardsFit = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
  height: fit-content;

  @media(max-width:1100px){
    display: flex;
    flex-direction: column;
  }
`

const Fit = styled.div`
  display: flex;
  gap: 5px;  
  width: 100%;  
  
  @media(max-width:1100px){
    flex-direction: column;
  }
`
const Fit2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;  
  width: 100%;  

  @media(max-width:1100px){    
    flex-direction: column; 
  }
`

interface Props{
  id: string
}

function Skills ({id}: Props){
  return( 
      <a id={id}>
        <DivMain>
          <H1> Principais Projetos </H1>
          <p>Esses aqui são alguns dos principais projetos que eu realizei ate aqui durante essa minha jornada de estudo.</p>
          <CardsFit>
            
              <Cards src="social_dev.png" name="Social Dev" href="https://social-dev-woad.vercel.app/login"/>
              <Cards src="form-cartao.png" name="Form Cartão" href="https://form-cartao3.vercel.app/"/>
              <Cards src="todo_list.png" name="TODO-LIST React" href="https://to-do-list-vert-two.vercel.app/"/>


              <Cards src="react_ts_todo.png" name="TODO React+TS" href="https://todo-typescript-gamma.vercel.app/"/>
              <Cards src="tic_tac_toe.png" name="Jogo da Velha React" href="https://react-jogo-da-velha-theta.vercel.app/"/>
              <Cards src="news_homepage.png" name="News Homepage" href="https://news-homepage-drab.vercel.app/"/>  
              <Cards src="cinema_react.png" name="Cinema React" href="https://cinema-react-rosy.vercel.app/"/>
      
             
          </CardsFit>
        </DivMain> 
      </a>  
  )
}

export default Skills;
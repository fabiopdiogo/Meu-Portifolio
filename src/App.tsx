import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'

import Column from './components/Column'
import Content from './components/Content';
import ColumnAndContent from './components/ColumnAndContent';

const Box = styled.div`
  display: flex;      
  background-color: #121213;   
  height: 100vh;
  width: 100%; 
`

function App() { 

  return (   
    <Box>
      <ColumnAndContent>    
        <Content/>
      </ColumnAndContent>  
    </Box>
  );
}

export default App;

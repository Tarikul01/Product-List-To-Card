import React from 'react';
import Container from '@mui/material/Container';
import { fetchProducts }  from './actions/products.action';

const App = () => {
  fetchProducts();


  return (
    <Container> 
      Test 
    </Container>
  )
}

export default App


import React from 'react'
import {Card,CardMedia,CardContent, Typography} from '@mui/material';

const ProductCard = () => {
  return (
    <Card>
      <CardMedia  component='img' height="400" image={"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"}/>
      <CardContent><Typography variant="h1">fuck</Typography></CardContent>


    </Card>
  )
}

export default ProductCard;

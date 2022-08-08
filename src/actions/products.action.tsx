import { fetchProduct } from '../api/index.api';

export const fetchProducts = async () =>  {

  const {data}=await fetchProduct();
  // console.log(data);
  console.log(data);
  
}

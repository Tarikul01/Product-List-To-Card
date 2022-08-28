import axios from 'axios';
// import { ReactElement } from 'react';
import { iProduct } from '../state/actions/Action';

const API = axios.create({ baseURL: 'https://fakestoreapi.com' });
type ResposeData={
    data:iProduct[]
}

export const fetchCategory = ()=> API.get<ResposeData>(`/products`);
export const fetchProduct= () => API.get(`/products`);

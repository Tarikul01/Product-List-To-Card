import axios from "axios";

const API=axios.create({baseURL:'https://fakestoreapi.com'});



export const fetchCategory= ()=> API.get(`/products`);
export const fetchProduct=()=>API.get(`/products`)

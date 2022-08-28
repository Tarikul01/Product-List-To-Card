import { Dispatch } from 'redux';
import { fetchProduct } from '../../api/index.api';
import { Action } from "./Action";
import { ActionType } from './ActionType';
// interface iProduct{
//     id:Number,
//     title:String,
//     description:String,
//     price:Number,
//     category:String,
//     image:String,
//     rating:{
//         rate:Number,
//         count:Number,
//     },
// }

// interface IAction{
//     type:String,
//     products:iProduct[],
// }

export const fetchProducts =()=> async (dispatch:Dispatch<Action>)=> {
	const {data}= await fetchProduct();
	dispatch({type:ActionType.FETCH_PRODUCTS,payload:data})
	// console.log(data);
};

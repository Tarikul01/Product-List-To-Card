import {ActionType} from './ActionType';
interface iProduct{
    id:Number,
    title:String,
    description:String,
    price:Number,
    category:String,
    image:string,
    rating:{
        rate:Number,
        count:Number,
    },
}



interface fetchProducts {
    type: ActionType.FETCH_PRODUCTS;
    payload:iProduct[]
}

type  Action = fetchProducts ;
export type {iProduct,Action};
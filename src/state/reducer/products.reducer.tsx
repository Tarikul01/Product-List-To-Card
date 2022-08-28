import {ActionType} from '../actions/ActionType';
import {Action} from '../actions/Action';

interface iProduct{
    id:Number,
    title:String,
    description:String,
    price:Number,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number,
    },
}


interface iState{
    products:iProduct[]


}



const product = (state:iState={products:[]},action:Action):iState => {
    // console.log(action)
    switch(action.type){
        case ActionType.FETCH_PRODUCTS:
            return {...state,products:action.payload};
        default:
            return {...state};
    }
    // return state;

}

export default product
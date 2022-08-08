import { FETCH_PRODUCT } from "../utils/action.utils";

const product = (state={product:[],isLoading:true},action) => {
    switch(action.type){
        case FETCH_PRODUCT:
            return {...state,product:action.payload};
        default:
            return {...state};
    }

}

export default product
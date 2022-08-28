import { combineReducers } from "redux";
import product from './products.reducer';


// export default combineReducers({
//   product,

// });
const reducers=combineReducers({
  products:product,
});
export default reducers;
export type RootState=ReturnType<typeof reducers>;
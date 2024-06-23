import handleCart from "./handleCart";
//combineReducers là một hàm từ redux giúp kết hợp nhiều reducer lại thành một root reducer.
import { combineReducers } from "redux";

//thằng gom các reducer lại
const rootReducer = combineReducers({
    handleCart
})
export default rootReducer
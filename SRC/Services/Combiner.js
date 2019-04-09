import {combineReducers} from "redux";
// import * as getReducer from "./ServicesData/reducer";
// import * as usersReducer from "./ServicesTheme/reducer";


import usersReducer from './ServicesTheme/reducer'
import fetchReducer from './ServicesData/reducer'
const rootReducer = combineReducers({
   changeReducer :  usersReducer,
    userReducer :   fetchReducer
});
export default rootReducer;
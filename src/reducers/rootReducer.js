import {combineReducers} from 'redux';
//import authReducer from './authReducer'; 
import offerReducer from './offerReducer'; 
//import commentReducer from './commentReducer'; 
//import errorReducer from './errorReducer'; 

export default combineReducers({
    //auth: authReducer,
    offer: offerReducer
    //comment: commentReducer,
    //error: errorReducer
})
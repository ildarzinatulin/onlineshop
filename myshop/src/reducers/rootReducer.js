import { combineReducers } from 'redux';

import account from './account.js';
import goods from './goods.js';
import cart from './cart.js';
//import your reducer:
//import simpleReducer from './simpleReducer';


export default combineReducers({
	account,
	goods,
	cart
	//write name your reducer here
	//simpleReducer
});
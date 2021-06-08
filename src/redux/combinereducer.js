import {combineReducers} from 'redux';
import loginReducer from './ducks/users';
import pexelReducer from './ducks/pexel';
import alertReducer from './ducks/alertd';
import cartReducer from './ducks/cart';
const allReducer = combineReducers({
	login: loginReducer,
	pexel: pexelReducer,
	alert: alertReducer,
	cart: cartReducer,
});

export default allReducer;
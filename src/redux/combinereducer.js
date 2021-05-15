import {combineReducers} from 'redux';
import loginReducer from './ducks/users';

const allReducer = combineReducers({
	login: loginReducer,
});

export default allReducer;
const PASSWORD_DATA = 'PASSWORD_DATA';
const USERNAME_DATA = 'USERNAME_DATA';
export const GET_TOKEN     = 'GET_TOKEN';

export const getToken = () => ({
	type: GET_TOKEN,
})


export const inputUsername = (data) => ({
	type: USERNAME_DATA,
	payload: data
});
export const inputPassword = (data) => ({
	type: PASSWORD_DATA,
	payload: data
});

const initialstate = {
	username : '',
	password : '',
};
const loginReducer = (state=initialstate, action) => {
	if  (action.type === USERNAME_DATA) {
		return ({...state, username: action.payload['username']})
	}
	if (action.type === PASSWORD_DATA) {
		return ({...state, password: action.payload['password']})
	}
	return state;
};

export default loginReducer;
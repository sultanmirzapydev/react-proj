export const GET_PEXEL = 'GET_PEXEL';
export const SET_PEXEL = 'SET_PEXEL';
export const INPUT_FOR_SEARCH = 'INPUT_FOR_SEARCH';

export const getPexel = (data) => ({
	type: GET_PEXEL,
	payload: data
});

export const setPexel = (data) => ({
	type: SET_PEXEL,
	payload: data
});
export const inputForSearch = (data) => ({
	type: INPUT_FOR_SEARCH,
	payload : data
});

const intialState = {
	images:[],
	searchText: 'cute puppies',

}

const pexelReducer = (state=intialState, action) => {
	console.log(action.type, 'pexel')
	if (action.type === INPUT_FOR_SEARCH) {
		console.log('pexel', action.type)
		return {...state, searchText: action.payload}
	}
	if (action.type === SET_PEXEL) {
		console.log(action.type);
		console.log(action.payload);
		return {...state, images: action.payload}
	}
	return state;
}

export default pexelReducer;
export const GET_PEXEL = 'GET_PEXEL';
export const SET_PEXEL = 'SET_PEXEL';
export const INPUT_FOR_SEARCH = 'INPUT_FOR_SEARCH';
export const SET_LIKED  = 'SET_LIKED';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const GET_TOTAL = 'GET_TOTAL';

export const getTotal = (data) => ({
	type: GET_TOTAL,
	payload: data
});
export const getDecre = (data) => ({
	type: DECREASE,
	payload: data
});

export const getPexel = (data) => ({
	type: GET_PEXEL,
	payload: data
});
export const setLiked = (data) => ({
	type: SET_LIKED,
	payload: data
})

export const setPexel = (data) => ({
	type: SET_PEXEL,
	payload: data
});
export const inputForSearch = (data) => ({
	type: INPUT_FOR_SEARCH,
	payload : data
});
export const getIncre = (data) => ({
	type: INCREASE,
	payload: data
});

const intialState = {
	images:[],
	searchText: 'cute puppies',
	totalCart : 0,
	isInputValid: false
}

const pexelReducer = (state=intialState, action) => {
	if (action.type === INPUT_FOR_SEARCH) {
		console.log('pexel', action.type)
		return {...state, searchText: action.payload, isInputValid: true}
	}
	if (action.type === SET_PEXEL) {
		
		return {...state, images: action.payload }

		}
	if (action.type === SET_LIKED) {
		let temp = state.images.map((item) =>
			{if (item.id === action.payload.qs2)
				{ return {...item, is_liked: action.payload.qs};
			}
			
			return item;
		});
		return { ...state, images: temp}
	};
	if (action.type === INCREASE) {

		let temp2 = state.images.map((item) => 
			{if (item.id === action.payload)
				{return {...item, count: item.count + 1}}
			return item;
			}
		);
		return {...state, images:temp2 }
	};
	if (action.type === GET_TOTAL) {
		const sum = state.images.reduce((total, element) =>{
			const {count} = element; 
			return total + count;
		}, 0);
		

		return {...state, totalCart: sum}
	};
	if (action.type === DECREASE) {
		let temp3 = state.images.map((item) => {
			if (item.id === action.payload) {
				return {...item, count: item.count - 1}
			}
			return item;
		});
		return {...state, images: temp3}
	}


	return state;
			
}

export default pexelReducer;
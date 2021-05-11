export const GET_IMAGE = 'GET_IMAGE';
export const SET_IMAGE = 'SET_IMAGE';
export const IMAGE_FETCH_FAILED = 'IMAGE_FETCH_FAILED';

export const imgFetchFailed = (message) => ({
	type : IMAGE_FETCH_FAILED,
	payload : message
});

export const getImage = () =>({
	type: GET_IMAGE
});

export const setImage = (images) => ({
	type: SET_IMAGE,
	payload : images
});

const initialstate = {
	images: [],
	message: '',
};

const userReducer = (state=initialstate, action) => {
	if (action.type === SET_IMAGE) {
		const images = action.payload
		return {...state, images:images };
	
	}
	if (action.type === IMAGE_FETCH_FAILED) {
		const msg = action.payload
		return {...state, message:msg};

	}
	return state;
}


export default userReducer;
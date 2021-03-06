export const GET_PEXEL = 'GET_PEXEL';
export const SET_PEXEL = 'SET_PEXEL';
export const INPUT_FOR_SEARCH = 'INPUT_FOR_SEARCH';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const GET_TOTAL = 'GET_TOTAL';
export const GET_REMOVE = 'GET_REMOVE';
export const ERROR     = 'ERROR';
export const RECOVER_ITEM = 'RECOVER_ITEM';
export const SET_PEOPLE = 'SET_PEOPLE';
export const SHOW_LIKE = 'SHOW_LIKE';
export const CLEAR_REMOVED_ITEM = 'CLEAR_REMOVED_ITEM';
export const REMOVE_RECOVER_ITEM = 'REMOVE_RECOVER_ITEM';
export const REMOVE_RECOVER_ALERT = 'REMOVE_RECOVER_ALERT';
export const CART_REMOVER_ITEM = 'CART_REMOVER_ITEM';
export const GET_TOTAL_OFFER = 'GET_TOTAL_OFFER';

export const getTotalOffer = (data) => ({
	type: GET_TOTAL_OFFER,

})

export const cartRemoveItem = (data) => ({
	type: CART_REMOVER_ITEM,
	payload:data
})

export const removeRecoverAlert = (data) => ({
	type: REMOVE_RECOVER_ALERT,
})


export const removeRecoverItem = (data) => ({
	type:REMOVE_RECOVER_ITEM,

})

export const  clearRemovedItem = (data) => ({
	type:CLEAR_REMOVED_ITEM,
	payload: data
})
export const showLike = (data) => ({
	type:SHOW_LIKE,
	payload:data
})

export const setPeople = (data) => ({
	type : SET_PEOPLE,
	payload: data
})

export const recoverItem = (data) => ({
	type: RECOVER_ITEM,
	payload:data
})

export const error = (data) => ({
	type: ERROR,
	payload: data
});

export const getRemove = (data) => ({
	type: GET_REMOVE,
	payload: data
});

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
	disableInitialGetPexel : true,
	searchText: 'puppies',
	totalCart : 0,
	totalPrice: 0,
	totalOffer:0,
	cart  : [],
	isInputValid: false,
	isLoading : true,
	isError : false,
	errormsg: '',
	removedItem: [],
	isRemoved: false,
	isRcovered: false
}

const pexelReducer = (state=intialState, action) => {

	if (action.type === SHOW_LIKE) {
		
		if (action.payload['liked'] === false) {
			let tempfile = state.images.map((item)=> {
				if (item.id === action.payload['id']) {
					return{...item, total_liked:item.total_liked + 1} }
				return item;
			});
			
			return {...state,images: tempfile}
		}
		else if(action.payload['liked']=== true) {
			let tempfile = state.images.map((item) => {
				if (action.payload['id'] === item.id) {
					return {...item, total_liked : item.total_liked -1}
				}
				return item;
			});

			return {...state, images: tempfile}
		}
	}
	
	
	if (action.type === INPUT_FOR_SEARCH) {
	
		return {...state, searchText: action.payload, isInputValid: true}
	}
	if (action.type === SET_PEXEL) {
		
		return {...state, images: action.payload, isLoading: false, disableInitialGetPexel: false }

	};
	if (action.type === SET_PEOPLE) {
		
		let tempf = state.images.map((item, i) => Object.assign({}, item, action.payload[i]));
		
		return {...state, images: tempf}
	};

	if (action.type === INCREASE) {

		let temp2 = state.images.map((item) => 
			{if (item.id === action.payload)
				{return {...item, count: item.count + 1 }}
			return item;
			}
		);
		
		return { ...state, images:temp2 }
	};
	if (action.type === GET_TOTAL) {
		const sum = state.images.reduce((total, element) =>{
			const {count, } = element; 
			return total + count;
		}, 0);
		

		return {...state, totalCart: sum}
	};

	if (action.type === DECREASE) {
		let temp3 = state.images.map((item) => {
			if (item.id === action.payload) {
				if (item.count>0) {return {...item,count:item.count-1}}
				//else return {...item,count: 0}
				
			}
			return item;
		});
		return {...state, images: temp3}
	}
	if (action.type === GET_REMOVE) {

		let temp4 = state.images.filter((item) =>item.id !== action.payload);
		let removeditem = state.images.filter((item)=> item.id === action.payload);
		return {...state, images: temp4 , removedItem:removeditem, isRemoved: true}
	}
	if (action.type === CLEAR_REMOVED_ITEM) {
		return {...state, removedItem:[' '], isRemoved:false}
	}
	if (action.type === ERROR) {
		return {...state, isError:true, errormsg: action.payload}
	}
	if (action.type === RECOVER_ITEM) {
		
		
		let temp = state.removedItem.concat(state.images);
		
		return {...state, images: temp, removedItem:[''], isRemoved:false, isRcovered: true}
	}
	if (action.type === REMOVE_RECOVER_ITEM) {
		return {...state, isRemoved: false, isRcovered: false}
	}
	if (action.type === REMOVE_RECOVER_ALERT) {
		return {...state, isRcovered:false}
	}
	if (action.type === CART_REMOVER_ITEM) {
		let tempFile = state.images.map((item) => {if (action.payload === item.id)
			{ return {...item, count:0} }
			return item
		})
		return {...state, images:tempFile }
	};
	if (action.type === GET_TOTAL_OFFER) {
		let {price, offers} = state.images.reduce((carttotal, item) => {
			let {offers, p, count} = item;
			let motprice = p.price * count;
			let finaloffer = motprice * offers/100;
			carttotal.price += motprice;
			carttotal.offers += finaloffer;
			return carttotal;
		},{price:0, offers:0})

		return {...state, totalPrice:price, totalOffer:offers}
	}

	return state;
			
}

export default pexelReducer;
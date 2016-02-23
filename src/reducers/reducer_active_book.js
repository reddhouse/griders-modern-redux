// State argument is not the entire application state, rather only
// the piece of state for which this reducer is responsible

// If we boot up the app, and the user has not selected a book, this reducer
// would return "undefined", which is illegal in redux, so we default the state
// argument to null

export default function(state = null, action) {
	
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload;
	}
	
	return state;
}
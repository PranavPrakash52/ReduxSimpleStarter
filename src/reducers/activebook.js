const Active_books = function(state = null,action){
	switch(action.type)
	{
		case 'BOOK_SELECTED':
			return action.payload;
	}

return state;
}
export default Active_books;

import React from 'react'

import BookList from '../containers/book-list'

import Bookselected from '../containers/reducer_selected'

class App extends React.Component
{
	render()
	{
	return(<div>
		<BookList/>
		<Bookselected/>
		
		</div>);
	}
}
export default App


import React, { Component } from 'react';

import { connect } from 'react-redux';

class BookList extends Component
{
	constructor(props){
        super(props);
    }
	renderlist()

	{
		console.log('hai')
		return (this.props.books.map(function(number){
			return (<li key={number.title}>{number.title}</li>);
		})
	);
	}
	render()
	{
		return(<ul>
			{this.renderlist()}
		</ul>);
	}
}

function mapStateToProps(state)
{
	return {books:state.books};
}

export default connect(mapStateToProps)(BookList);
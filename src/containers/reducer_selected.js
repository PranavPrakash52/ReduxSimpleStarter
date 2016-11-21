import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Bookselected extends Component
{
	render()
	{
		if(!this.props.books)
		{
			return(<div>select book to get started</div>);
		}
		
		return (
			<div><h2>Detail for</h2>{this.props.books.title}</div>
			);
	}

}

function mapStateToProps(state)
{
	return {books:state.activebook};
}

export default connect(mapStateToProps)(Bookselected);
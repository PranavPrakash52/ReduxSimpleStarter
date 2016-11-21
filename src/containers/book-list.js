import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectbook } from '../actions/index';
import { bindActionCreators } from 'redux'


class BookList extends Component
{
	constructor(props){
        super(props);
    }
	renderlist()
	{	
		
		return (this.props.books.map(function(number){
			return (
				
				<li onClick={()=> this.props.selectbook(number)}
				key={number.title}>
				{number.title}
				</li>
				);

		},this)	
		);

		
	}
	render()
	{
		return(
			
			<ul>
			
			{this.renderlist()}
			

		</ul>);
	}
}

function mapDispatchToProps(dispatch)
{
	return bindActionCreators({ selectbook: selectbook },dispatch);
}

function mapStateToProps(state)
{
	return {books:state.books};
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);
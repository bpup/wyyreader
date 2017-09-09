import React, { Component } from 'react';
import BookList from './list.js'



class Tast extends React.Component{
	constructor (props) {
		super(props)
		
	}
	render() {
	  return <div className='tast'><BookList bookdata={this.props.bookdata}/></div>
		
	}
}
export default Tast




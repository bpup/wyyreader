import React, { Component } from 'react';
import BookList from './list.js'



class Tast extends React.Component{
	constructor (props) {
		super(props)
		
	}
	render() {
	  return <BookList  bookdata={this.props.bookdata}/>
		
	}
}
export default Tast



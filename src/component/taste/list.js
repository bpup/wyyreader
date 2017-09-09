import React from 'react';
import Card from 'antd-mobile/lib/card'
import states from './../recommend/recommendmale.js'  
import axios from 'axios'
import {
	NavLink,
} from 'react-router-dom'

const values = function(obj) {
	var keys = Object.keys(obj);
	var length = keys.length;
	var values = Array(length);
	for (var i = 0; i < length; i++) {
	  values[i] = obj[keys[i]];
	}
	return values;
  };

let bookicon=<svg className="icon icon-shu"  style={{position:'relative',right:'.4rem'}} aria-hidden="true">
<use href="#icon-shu"></use>
</svg>
 class Listitem extends React.Component {
	 constructor (props) {
		 super(props)
		 
	 }

	 render() {
		var item=this.props.item
				if(item){
					
					return <Card>
				<Card.Body>
					<div className='cardbody'>
					  <img id='filterimg' src={item.images.large||'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-04-18-16-56-607_09.png'}/>	
					  <div className='sidebox'>
						  <div>{item.title}</div>
						  <span>{item.author}}/{item.publisher}</span>
						   <p>{item.summary}</p>
					  </div>	
					</div>
				</Card.Body>
				
			</Card>}else {return <Card>
				<Card.Body>
					<div className='cardbody'>
					  <img src='http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-04-18-16-56-607_13.png'/>	
					  <div className='sidebox'>
						  <div>十宗罪4</div>
						  <span>蜘蛛/黑龙江出版社</span>
						   <p>中国十大变态杀手</p>
					  </div>	
					</div>
				</Card.Body>
				
			</Card>}
		}
	 }
			 
 
	 








export default class BookList extends React.Component{
	constructor (props) {
		super(props)

	}


	render(){
		var bookdata=this.props.bookdata;
		var bookdatarr=values(bookdata)
		var newarr=bookdatarr.concat.apply([],bookdatarr).reverse()		
		return <div className="listcontent addtoplist">
		 <NavLink to='/personset' className="personalset">{bookicon}设定阅读口味，为你私人定制</NavLink>
{[].map.call(newarr,(item,i)=>{return <Listitem key={i.toString()} item={item}/>})}

		</div>
	}
	
}


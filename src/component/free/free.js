import React from 'react';
import Card from 'antd-mobile/lib/card'




class CardItem extends React.Component{
	constructor (props) {
		super(props)
		
	}
	render() {
	 var item=this.props.item
	  return (
		<div className='freewarp'>
		   <Card>
			   <Card.Body>
				   <div className='cardbody'>
					 <img src={item.images.large||'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-04-18-16-56-607_09.png'}/>	
					 <div className='sidebox'>
						 <div>{item.title}</div>
						 <span>{item.author}}/{item.publisher}</span>
						  <p>{item.summary}</p>
					 </div>	
				   </div>
			   </Card.Body>
			   
		   </Card>
			   
		</div>
	  )
	}
	
}
export default class Listitem extends React.Component {
	constructor (props) {
		super(props)
		
	}
	
	render() {
		var bookdata=this.props.bookdata;
		var bookdatarr=Object.values(bookdata)
		var newarr=bookdatarr.concat.apply([],bookdatarr).slice(30,150).reverse()
		console.log(newarr)
		var newarrfirst=newarr.slice(0,3)
		var newarrtwo=newarr.slice(24,27)
		var newarrthree=newarr.slice(38,41)
		var newarrfour=newarr.slice(50,53)
				   
				   return <div className='freelist'> 
					   {newarrfirst.map((item)=>{
							return <CardItem title='限时畅读' item={item}/>
								})}
					   {newarrtwo.map((item)=>{
							return <CardItem title='新书免费' item={item}/>
								})}
					   {newarrthree.map((item)=>{
							return <CardItem title='全本免费' item={item}/>
								})}
					   {newarrfour.map((item)=>{
							return <CardItem title='包月专区' item={item}/>
								})}
				</div>
				
				
				
				}}


import React from 'react';
import Card from 'antd-mobile/lib/card'
import states from './../recommend/recommendmale.js'  
import axios from 'axios'
import {
	NavLink,
} from 'react-router-dom'
let bookicon=<svg className="icon icon-shu"  style={{position:'relative',right:'.4rem'}} aria-hidden="true">
<use href="#icon-shu"></use>
</svg>
 class Listitem extends React.Component {
	 constructor (props) {
		 super(props)
		 
	 }
	 componentDidUpdate(){
		var item=this.props.item		
		 var imgs=new Image(item.images.large)
		console.log(imgs,'rere')
	 }	
	 render() {
		var item=this.props.item
				if(item.summary){
					
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
		this.state={
			booklist:null
		}
	}
	componentDidMount = () => {
		var _this=this	

 	
		axios.request(
			{	
					url: 'https://api.douban.com/v2/book/search',
					method: 'get', 
				// https://bird.ioliu.cn/v1/?url=
					params: {
						tag: ['语言','散文','历史','奋斗'][parseInt(Math.random()*4)],
						count:100,
						start:parseInt(Math.random()*100)

					}
				
				
				}
			
		).then(function (response) {
				_this.setState({
				booklist:response.data.books})
			}).catch(function (error) {
					console.log(error)
			})
		}

	render(){
		var booklist=this.state.booklist;		
		var booklist=booklist?booklist:[]
		return <div className="listcontent addtoplist">
		 <NavLink to='/personset' className="personalset">{bookicon}设定阅读口味，为你私人定制</NavLink>
{[].map.call(booklist,(item,i)=>{return <Listitem key={i.toString()} item={item}/>})}

		</div>
	}
	
}


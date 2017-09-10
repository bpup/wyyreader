import React from 'react';
import NavBar from 'antd-mobile/lib/nav-bar'
import Card from 'antd-mobile/lib/card'
import createHistory from 'history/createHashHistory'
import { withRouter } from 'react-router'
const history = createHistory()

 class Titlebar extends React.Component{

	constructor (props) {
		super(props)
		
	}
	render(){
		return <NavBar style={{position:'fixed',top:'0',width:'100%'}} 
		leftContent={
		<svg className="icon iconhuitui" aria-hidden="true">
		<use href="#icon-houtui"></use>
		</svg>}
		mode="light"
		onLeftClick={() =>{history.goBack()}}
		>{this.props.title}</NavBar>
	}
 }   
    
 class Listitem extends React.Component {
	 constructor (props) {
		 super(props)
		 
	 }
	 
	 render() {
		 var item=this.props.item
			 console.log(item.images.large)
				if(item.summary){
					
					return <Card>
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
			 
 
	




class BookclaasList extends React.Component{
	constructor (props) {
		super(props)
		this.state={
			booklist:null
		}
	}
	componentDidMount() {
		var booklist=this.props.location.state;

		this.setState({
			booklist:booklist
		})
	}
	render(){
		console.log(this.props)
		var bookdata=this.props.location.state		
		var bookdata=bookdata?bookdata:[]
		return <div className='classmore'>
			<Titlebar title='下拉更多'/>
			<div className="listcontent">{[].map.call(bookdata,(item,i)=>{return <Listitem key={i.toString()} item={item}/>})}</div>
			</div>
	}
	
}
export default BookclaasList

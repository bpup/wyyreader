import React from 'react';
import NavBar from 'antd-mobile/lib/nav-bar'
import Card from 'antd-mobile/lib/card'
import createHistory from 'history/createHashHistory'
const history = createHistory()

 class Titlebar extends React.Component{

	constructor (props) {
		super(props)
		
	}
	render(){
		return <NavBar leftContent={<svg className="icon iconhuitui" aria-hidden="true">
		<use href="#icon-houtui"></use>
		</svg>}
		mode="light"
		onLeftClick={() =>{history.goBack()}}
		>{this.props.title}</NavBar>
	}
 }   
    
 class Listitem extends React.Component{
	 constructor (props) {
		 super(props)
		 
	 }
	 
	 render() {
		 var item=this.props.item
		 return (
			<Card>
				<Card.Body>
					<div className='cardbody'>
					  <img src={item.images.large}/>	
					  <div className='sidebox'>
						  <div>{item.title}</div>
						  <span>{item.author}}/{item.publisher}</span>
						   <p>{item.summary}</p>
					  </div>	
					</div>
				</Card.Body>
				
			</Card>
		 )
	 }
	 
 }
	 








export default class BookMoreList extends React.Component{
	constructor (props) {
		super(props)
		this.state={
			booklist:[]
		}
	}
	componentDidMount() {
		var booklist=this.props.location.state;
		this.setState({
			booklist:booklist
		})
	}
	render(){
		var booklist=this.state.booklist||[];		
		console.log(booklist)
		return <div>
			<Titlebar title={this.props.location.state?this.props.location.state.title:'下拉更多'}/>
			{[].map.call(booklist,(item)=>{return <Listitem item={item}/>})}
			</div>
	}
	
}
import React from 'react';
import NavBar from 'antd-mobile/lib/nav-bar'
import Card from 'antd-mobile/lib/card'
import Flex from 'antd-mobile/lib/flex'
import WhiteSpace from 'antd-mobile/lib/white-space'
import WingBlank from 'antd-mobile/lib/wing-blank'
import Infoinput from './infoinput.js'
import {
	NavLink,
	Route,
	Switch
	} from 'react-router-dom'
import createHistory from 'history/createHashHistory'
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
		>阅读口味</NavBar>
	}
 }  
 class Routetoinfo extends React.Component{

	constructor (props) {
		super(props)
		
	}
	render(){
		return <div className='routetoinfo'>
			<svg className="icon icon-kafei" aria-hidden="true">
					<use href="#icon-kafei"></use>
					</svg>
			<p>
				完善资料<br/>
				让我们更了解你的口味
			</p>
			<svg className="icon icon-houtuir" aria-hidden="true">
					<use href="#icon-houtui"></use>
			</svg>		
		</div>
	}
 }  

 const PlaceHolder = props => (
	<div
	  className='tagbook'
	  onTouchStart={
		  (e)=>{
				
			 if(e.target.getAttribute('checked')=='true'){
				 
				e.target.style.backgroundColor='#ebebef'
				e.target.style.color='#817b74'
				e.target.setAttribute('checked',false)
				
			 }else{
				e.target.style.backgroundColor='#ed6460'
				e.target.style.color='#fff'
				e.target.setAttribute('checked',true)
			 } 
		  }
	  }	
	  style={{
		backgroundColor: '#ebebef',
		textAlign: 'center',
		height: '0.6rem',
		lineHeight: '0.6rem',
		borderRadius:'0.08rem',
		fontSize:'0.32rem',
		color:'#817b74',
		width:'2.0rem'
	  }}
	  {...props}
	>{props.item}</div>
  );
  
let maletagarr=['玄幻仙侠','科幻奇幻','军事谍战',
				'官场职场','悬疑探险','同人网游',
				'灵异恐怖','都市生活','历史传奇']
let femaletagarr=['都市言情','穿越架空','仙侠幻情',
				'灵异推理','短片美文',
				'种田重生','宫斗宅斗','浪漫青春','古风古韵']
let publishtagarr=['小说作品','文学作品','文化艺术',
				'人文社科','经济管理','两性情感',
				'自然科学','计算机','外文外板']
class TagButton extends React.Component{
	constructor(props, context) {
		super(props, context)
		
	}
	render() {
	  return <div>
		  <p className='classify'>{this.props.classify}</p>
	  
	<Flex justify='around' wrap="wrap" style={{width:'95%',margin:'0.2rem auto'}}>
	   <Flex.Item><PlaceHolder item={this.props.tagarr[0]} /></Flex.Item>
	   <Flex.Item><PlaceHolder item={this.props.tagarr[1]} /></Flex.Item>
	   <Flex.Item><PlaceHolder item={this.props.tagarr[2]} /></Flex.Item>
	   </Flex>
	     
	<Flex justify='around' wrap="wrap" style={{width:'95%',margin:'0.2rem auto'}}>
	   <Flex.Item><PlaceHolder item={this.props.tagarr[3]} /></Flex.Item>
	   <Flex.Item><PlaceHolder item={this.props.tagarr[4]} /></Flex.Item>
	   <Flex.Item><PlaceHolder item={this.props.tagarr[5]} /></Flex.Item>	   
	   </Flex>
	   <Flex justify='around' wrap="wrap" style={{width:'95%',margin:'0.2rem auto'}}>
	   <Flex.Item><PlaceHolder item={this.props.tagarr[6]} /></Flex.Item>
	   <Flex.Item><PlaceHolder item={this.props.tagarr[7]} /></Flex.Item>
	   <Flex.Item><PlaceHolder item={this.props.tagarr[8]} /></Flex.Item>	   
	   </Flex>
	
	   
	 <WhiteSpace size="sm" />
	 </div>

	  
	
}}

export default class Personalset extends React.Component{

	constructor (props) {
		super(props)
		
	}
	componentDidMount() {
		
	}
	render(){
		return <div>
			<Titlebar/>
			<NavLink style={{color:'#333'}} to='/personset/infoinput'><Routetoinfo/></NavLink>
			<TagButton classify='男生小说' tagarr={maletagarr}/>
			<TagButton classify='女生小说' tagarr={femaletagarr}/>
			<TagButton classify='出版图书' tagarr={publishtagarr}/>
		</div>
	}
 }  








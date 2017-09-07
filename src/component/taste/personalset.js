import React from 'react';
import NavBar from 'antd-mobile/lib/nav-bar'
import Card from 'antd-mobile/lib/card'
import Flex from 'antd-mobile/lib/flex'
import WhiteSpace from 'antd-mobile/lib/white-space'
import WingBlank from 'antd-mobile/lib/wing-blank'
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
	  style={{
		backgroundColor: '#ebebef',
		color: '#bbb',
		textAlign: 'center',
		height: '0.6rem',
		lineHeight: '0.6rem',
		borderRadius:'0.08rem',
		fontSize:'0.36rem',
		color:'#817b74'
	  }}
	  {...props}
	>{props.item}</div>
  );
  

class TagButton extends React.Component{
	constructor(props, context) {
		super(props, context)
		
	}
	render() {
	  return <div>
		  <p className='classify'>{this.props.classify}</p>
	  <WhiteSpace size="lg" />
	  
	<Flex justify='between' wrap="wrap" style={{width:'95%',margin:'0 auto'}}>
	   <Flex.Item><PlaceHolder item='玄幻仙侠' /></Flex.Item>
	   <Flex.Item><PlaceHolder item='科幻奇幻' /></Flex.Item>
	   <Flex.Item><PlaceHolder item='军事谍战' /></Flex.Item>
	   <Flex.Item><PlaceHolder item='官场职场' /></Flex.Item>
	   <Flex.Item><PlaceHolder item='悬疑探险' /></Flex.Item>
	   <Flex.Item><PlaceHolder item='灵异恐怖' /></Flex.Item>
	   <Flex.Item><PlaceHolder item='都市生活' /></Flex.Item>
	   <Flex.Item><PlaceHolder item='同人网游' /></Flex.Item>
	   <Flex.Item><PlaceHolder item='历史传奇' /></Flex.Item>
	   <Flex.Item><PlaceHolder item='短片小说' /></Flex.Item>
	 </Flex>
	 <WhiteSpace size="lg" />
	 </div>

	  
	
}}

export default class Personalset extends React.Component{

	constructor (props) {
		super(props)
		
	}
	render(){
		return <div>
			<Titlebar/>
			<Routetoinfo/>
			<TagButton classify='男生小说'/>
		</div>
	}
 }  








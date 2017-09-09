import React, { Component } from 'react';
import Carousel from 'antd-mobile/lib/carousel'
import WingBlank from 'antd-mobile/lib/wing-blank'
import WhiteSpace from 'antd-mobile/lib/white-space'
import Grid from 'antd-mobile/lib/grid'
import axios from 'axios'
import {
	NavLink,
} from 'react-router-dom'




const tagcontent=[
	'骁骑校最新都市悬疑力作《罪恶调查局》',
	'我才不会被女孩子欺负呢!',
	'我们为什么要过节--冯骥才',
	'割下的肉是自己的？《诡异奇谈》',
	'在二次元场景中做一场梦的插画图片',
]
const randomContent=(arr)=>{
	return arr[parseInt(Math.random()*arr.length)]
}


class Carouselmale extends React.Component {
constructor(props) {
	super(props)
	this.state = {
		data: ['', '', ''],
		initialHeight: 350,
	  }
}
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
		data: ['http://ovj4n4xu6.bkt.clouddn.com/hbimg1.jpg', 
			   'http://ovj4n4xu6.bkt.clouddn.com/%E6%9C%AA%E6%A0%87%E9%A2%98-1_06.png', 
			   'http://ovj4n4xu6.bkt.clouddn.com/haib2.png'],
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
        <Carousel
          className="my-carousel"
          autoplay={true}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          /* beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)} */
		  dots={false}
        >

          {this.state.data.map(ii => (
            <a href="www.ailsa.top/" key={ii} style={hProp}>
              <img
                src={ii}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>



     
    );
  }
}

class Taghot extends React.Component{
	constructor(props) {
		super(props)
	}
	render(){
		return <WingBlank size="md"><div className='taghot'>
			<div className='tag'>热门</div>	
			<div className='tagcontent'>{randomContent(tagcontent)}</div>	
		</div>
		</WingBlank>
		
	}
}




class GridSix extends React.Component{
	constructor (props) {
		super(props)
	

	}
		
	render(){
		
			let bookdata=this.props.bookdata||[]
			var localtion={
				pathname: '/more',
				state: { 
					bookdata: bookdata,
					title:this.props.title
				}}
			let datasix=bookdata.slice(0,6)
				return <div>
				<div className="sub-title">{this.props.title} <NavLink  className='more' to={localtion}><span>更多...</span></NavLink></div>
				<Grid data={datasix}
					hasLine={false}
					columnNum={3}
					renderItem={dataItem => (
					<div className='singlewarp'>
						<img src={dataItem?dataItem.images.large:'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-04-18-16-56-607_09.png'} style={{ width: '2.15rem',height:'3.2rem'}}/>
						<div className='booktitle' style={{ color: '#24221f',textAlign:'left'}}>
						<p style={{
							fontSize:'0.32rem',
							marginLeft:'0.2rem',
							textAlign:'left',
							marginTop:'0.2rem',
							width:'2rem'				
							}}>{dataItem?dataItem.title:'精品小说'}</p>
						<span style={{
		
													fontSize:'0.24rem',
													color:'#d4d3dd',
													marginLeft:'0.2rem',
													overflow:'hidden',
													textEmphasis:'elas',
													marginTop:'0.1rem',
													maxWidth:'1.6rem',
													textOverflow:'ellipsis'
													}}>{dataItem?dataItem.author:null}</span>
						</div>
					</div>
					)}
				/>
				</div>


		}

		
	
	}



class Recommend extends React.Component{
	constructor(props) {
		super(props)
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		if(Object.keys(nextProps.bookdata).length==8){
			return true
		}
		return false
	}
	
	render(){
		var bookdata=this.props.bookdata;
		var keyarr=Object.keys(bookdata)
		console.log(bookdata)
		const tagarr={
			 '0':'玄幻仙侠',
			 "1":'悬疑冒险',
			 "2":'编程语言',
			 "3":'官场风云',
			 "4":'历史传奇',
			 "5":'短篇小说',
			 "6":'诺贝尔系列',
			 "7":'英文小说'}
		const tagarrs=[
			 '玄幻仙侠',
			 '悬疑冒险',
			 '编程语言',
			 '官场风云',
			 '历史传奇',
			 '短篇小说',
			 '诺贝尔系列',
			 '英文小说']
			return <div className='recommand'>
			<Carouselmale/>
			<Taghot/>
		  {	keyarr.map((i)=>{
				console.log(i)
		    	return <GridSix bookdata={bookdata[i]} key={i.toString()} title={tagarrs[parseInt(i)]}/>
				
			})}
		
		</div>
		}
	
	}
	
export default Recommend




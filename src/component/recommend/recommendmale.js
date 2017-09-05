import React, { Component } from 'react';
import Carousel from 'antd-mobile/lib/carousel'
import WingBlank from 'antd-mobile/lib/wing-blank'
import WhiteSpace from 'antd-mobile/lib/white-space'
import Grid from 'antd-mobile/lib/grid'
import axios from 'axios'

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
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
		  dots={true}
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




class GridExample extends React.Component{
	constructor (props) {
		super(props)
		this.state={
			bookdata:[]
		}
	}


	componentDidMount = () => {
		var _this=this		
		axios.request(
			{	
					url: 'https://api.douban.com/v2/book/search',
					method: 'get', 
				// 	headers: {
				// 		'contentType':'application/json',
				
				// },
					params: {
						q: '经典',
						count:30
					}
				
				
				}
			
		).then(function (response) {
			 alert(response)
				_this.setState({
				bookdata:response.data.books})
			}).catch(function (error) {
					console.dir(error)
			})
		}
	
	
	

	
	
	render(){
		
			let bookdata=this.state.bookdata||[]
			let datasix=bookdata.slice(0,6)
				return <div>
				<div className="sub-title">经典必读</div>
				<Grid data={datasix}
					hasLine={false}
					columnNum={3}
					renderItem={dataItem => (
					<div className='singlewarp'>
						<img src={dataItem.images.large} style={{ width: '2.15rem',height:'3.2rem'}}/>
						<div className='booktitle' style={{ color: '#24221f',textAlign:'left'}}>
						<p style={{fontSize:'0.36rem',marginLeft:'0.2rem',textAlign:'left',marginTop:'0.2rem',marginBottom:'0'}}>{dataItem.title}</p>
						<span style={{
		
													fontSize:'0.24rem',
													color:'#d4d3dd',
													marginLeft:'0.2rem',
													overflow:'hidden',
													textEmphasis:'elas',
													marginTop:'0.1rem',
													maxWidth:'1.6rem',
													textOverflow:'ellipsis'
													}}>{dataItem.author}</span>
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


	
	render(){
	
			return <div>
			<Carouselmale/>
			<Taghot/>
			<GridExample />
		</div>
		}
	
	}
export default Recommend



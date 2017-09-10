import React from 'react';
import Grid from 'antd-mobile/lib/grid'
import createHashHistory from 'history/createHashHistory'
import { withRouter,router } from 'react-router'
const history = createHashHistory({ alwaysEnableState: true })





var arr=[
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_17.png',
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_19.png',
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_09.png',
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_07.png',
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_29.png',
	'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-19-46-86_19.png',
	'http://ot7zo8t2i.bkt.clouddn.com/%E6%9C%AA%E6%A0%87%E9%A2%98-1_22.png',
	'http://ot7zo8t2i.bkt.clouddn.com/%E6%9C%AA%E6%A0%87%E9%A2%98-1_24.png',
]

const data = arr.map((val, i) => ({
  icon: val,
}));

const tagarr={
	'0':'玄幻仙侠',
	"1":'悬疑冒险',
	"2":'编程语言',
	"3":'官场风云',
	"4":'历史传奇',
	"5":'短篇小说',
	"6":'诺贝尔系列',
	"7":'英文小说'}
	
class Category extends React.Component {
	constructor (props) {
		super(props)
		
	}
	render() {
		var boodata=this.props.bookdata;
	  var bookdata1=boodata[0]
	  var bookdata2=boodata[1]
		var feboodata=this.props.febookdata;

		
		const state=(i)=>{	 
			if(i==0){
				return bookdata1}else if(i==1){
					return bookdata2
				}else{
					return this.props.febookdata[i-2]
				}
		}
	  return (
		<div className='category'>
		   <Grid data={data}  columnNum={2}  onClick={(e,i)=>{this.props.history.push('/class',state(i))}} />
		</div>
	  )
	}

}
export default withRouter(Category)
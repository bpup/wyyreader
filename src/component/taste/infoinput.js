import React from 'react';
import NavBar from 'antd-mobile/lib/nav-bar'
import WhiteSpace from 'antd-mobile/lib/white-space'
import WingBlank from 'antd-mobile/lib/wing-blank'
import ImagePicker  from 'antd-mobile/lib/image-picker'
import List  from 'antd-mobile/lib/list'
import InputItem  from 'antd-mobile/lib/input-item'
import Radio  from 'antd-mobile/lib/radio'
import  DatePicker  from 'antd-mobile/lib/date-picker'
import  Picker  from 'antd-mobile/lib/picker'
import moment from 'moment';
import 'moment/locale/zh-cn';
import createHistory from 'history/createHashHistory'
const history = createHistory()
const RadioItem = Radio.RadioItem;


const district=[
	'北京市','上海市','天津市',
	'重庆市','内蒙古自治区',
	'宁夏回族自治区', '新疆维吾尔族自治区',
	'西藏自治区','广西壮族自治区','黑龙江省',
	'辽宁省','吉林省', '河北省', '山东省',
	'山西省', '陕西省','甘肃省','青海省',
	 '河南省','安徽省','湖北省', '湖南省','江苏省',
	 '浙江省', '江西省','福建省','广东省', '海南省',
	 '台湾省','四川省', '云南省','贵州省','香港特别行政区','澳门特别行政区'
]

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
			rightContent='保存'
			mode="light"
			onLeftClick={() =>{history.goBack()}}
			>编辑资料</NavBar>
		}
	 }  
	 

	  class Imagepicker extends React.Component {
		state = {
		  files: [],
		}
		onChange = (files, type, index) => {
		  console.log(files, type, index);
		  this.setState({
			files,
		  });
		}
		render() {
		  const { files } = this.state;
		  return (
			<div style={{
				marginTop:'0.9rem',
				display:'flex',
				justifyContent:'space-between',
				alignItems:'center',
				background:'#fff'
			}}>
			  <ImagePicker
				files={files}
				onChange={this.onChange}
				onImageClick={(index, fs) => console.log(index, fs)}
				selectable={true}
			  />
			  <p
			  style={{
				fontSize:'.4rem',
				width:'3.6rem',
				position:'relative',
				left:'-2.4rem',
				color:'#6e655b'
			  }}
			  >更换图像</p>
			</div>
		  );
		}
	  }
	  
	  class InputList extends React.Component {
		  constructor(props) {
			  super(props)
			  this.onChange=this.onChange.bind(this)
			  this.state = {
				focused: false,
				focused1: false,
				value:0,
			  }
		  }
		  
	
		onChange = (value) => {
			this.setState({
			  value:value
			});
		  };
		render() {
			var value=this.state.value
			const maxDate = moment('2016-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
			const minDate = moment('1950-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);
			const data = [
				{ value: 0, label: '男' },
				{ value: 1, label: '女' },
			  ];
		  return (
			<div>
			 
 
			  <List>
				<InputItem
				  clear
				  autoFocus
				  placeholder=""
				>呢称</InputItem>
			  <WhiteSpace />
			  <div className='radiowarp'>
				{data.map(i => (
				<RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
					{i.label}
				</RadioItem>
				))}
				</div>
				<WhiteSpace />				
				<DatePicker
				mode="date"
				title="你的生日"
				minDate={minDate}
				maxDate={maxDate}
				>
				<List.Item arrow="horizontal">日期(生日)</List.Item>
				</DatePicker>
				<WhiteSpace />				
				<InputItem
				  clear
				  autoFocus
				  placeholder=""
				>个人简介</InputItem>
			  <WhiteSpace />
				</List>
	
 
			</div>
		  );
		}
	  }



	 export default class Infoinput extends React.Component{
		 constructor(props, context) {
			 super(props, context)
			 
		 }
		 render() {
		   return (
			 <div>
			   <Titlebar/>
			   <Imagepicker/>
			   <InputList/>
			 </div>
		   )
		 }
	 }


	 
	
	 

import React from 'react';
import Grid from 'antd-mobile/lib/grid'
import createHistory from 'history/createHashHistory'
const history = createHistory()






var arr=[
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_17.png',
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_19.png',
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_09.png',
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_07.png',
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_29.png',
	'http://ovj4n4xu6.bkt.clouddn.com/Screenshot_2017-09-08-21-06-55-352_27.png',
	'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-19-46-86_19.png',
	'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-19-46-86_17.png',
	'http://ot7zo8t2i.bkt.clouddn.com/%E6%9C%AA%E6%A0%87%E9%A2%98-1_22.png',
	'http://ot7zo8t2i.bkt.clouddn.com/%E6%9C%AA%E6%A0%87%E9%A2%98-1_24.png',
]

const data = arr.map((val, i) => ({
  icon: val,
}));



class Category extends React.Component {
	constructor (props) {
		super(props)
		
	}
	render() {
	  return (
		<div className='category'>
		   <Grid data={data} columnNum={2} />
		</div>
	  )
	}

}
export default Category
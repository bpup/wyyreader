import React, { Component } from 'react';
import Card from 'antd-mobile/lib/card'
import WhiteSpace from 'antd-mobile/lib/white-space'
import WingBlank from 'antd-mobile/lib/wing-blank'

const topicedata=[
	{title:'如何在穿越以后，优雅隐藏身份',
	 subtitle:'如何在穿越以后，优雅隐藏身份',
	 img:'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-40-24-130_11.png'
	},
	{title:'爱情的巨轮，说不沉就不沉',
	 subtitle:'爱情的巨轮，说不沉就不沉',
	 img:'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-40-24-130_05.png'
	},
	{title:'说好的假结婚，怎么还要我负责',
	 subtitle:'说好的假结婚，怎么还要我负责',
	 img:'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-40-07-91_11.png'
	},
	{title:'姐妹情深，殊死相斗',
	 subtitle:'姐妹情深，殊死相斗',
	 img:'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-40-02-363_05.png'
	},
	{title:'今后不做单身狗，教你如何撩妹',
	 subtitle:'今后不做单身狗，教你如何撩妹',
	 img:'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-39-57-172_11.png'
	},
	{title:'男频免费来袭',
	 subtitle:'每天精选十本，好看不要钱',
	 img:'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-39-57-172_05.png'
	},
	{title:'那些相爱相杀的闺蜜',
	 subtitle:'那些相爱相杀的闺蜜',
	 img:'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-39-53-663_11.png'
	},
	{title:'吊打恶女女配',
	 subtitle:'吊打恶女女配',
	 img:'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-39-53-663_05.png'
	},
	{title:'嗨，美女我有故事你有酒吗？',
	 subtitle:'嗨，美女我有故事你有酒吗？',
	 img:'http://ot7zo8t2i.bkt.clouddn.com/Screenshot_2017-09-09-10-39-49-520_11.png'
	},
]
class Topiceitem extends React.Component{
	constructor (props) {
		super(props)
		
	}
	render() {
	var item=this.props.item
	  return (
		<div className='topice'>

    <Card>
      <Card.Header
        title={item.title}
        extra={item.subtitle}
      />
      <Card.Body>
        <img src={item.img} style={{width:'90%'}}/>
      </Card.Body>
    </Card>

		</div>
	  )
	}
}

export default class Topice extends React.Component{
	constructor(props) {
		super(props)
		
	}
	render() {
	  return (
		<div>
		 {topicedata.map((item)=>{
			return <Topiceitem item={item}/>
		 })}
		</div>
	  )
	}
}
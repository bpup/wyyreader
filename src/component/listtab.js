import React, { Component } from 'react';
import Tabs from 'antd-mobile/lib/tabs'
import Recommend from './recommend/recommendmale.js'
import Tast from './taste/tast.js'
import Listitem from './free/free.js'
import axios from 'axios'

const TabPane = Tabs.TabPane;
const tagarr=['仙侠','悬疑','编程语言',
'官场','历史','短篇小说',
'诺贝尔','外文']
function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
class Tabsecond extends React.Component {
  constructor(props) {
   super(props)
   this.state={
    bookdata:{}
   }
  }
  componentDidMount = () => {
    var _this=this;
    tagarr.map((tag,i)=>{
    axios.request(
			{	
					url: 'https://api.douban.com/v2/book/search',
					method: 'get', 
				// https://bird.ioliu.cn/v1/?url=
					params: {
						tag: tag,
						count:50,
						start:parseInt(Math.random()*100)

					}
				
				
				}
			
		).then(function (response) {
        var bookdata=Object.assign({}, _this.state.bookdata);
    
        bookdata[i]=response.data.books;
				_this.setState({
				bookdata:bookdata})
			}).catch(function (error) {
					console.log(error)
			})

      
    })
  }
  
  render(){
    var bookdata=this.state.bookdata;
    return   <div>
    <Tabs swipeable={false} className='manyTabs' defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab='推荐' key="1" style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Recommend bookdata={bookdata}/>
        </div>
      </TabPane>
      <TabPane tab='口味' key="2" style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          <Tast bookdata={bookdata}/>
        </div>
      </TabPane>
      <TabPane tab='免费' key="3"  style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
          <Listitem bookdata={bookdata}/>
        </div>
      </TabPane>
      <TabPane tab='分类' key="4"  style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content of Third Tab
        </div>
      </TabPane>
      <TabPane tab='专题' key="5"  style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content of Third Tab
        </div>
      </TabPane>
    </Tabs>
  </div>

  }

}
export default Tabsecond
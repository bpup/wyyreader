import React, { Component } from 'react';
import Tabs from 'antd-mobile/lib/tabs'
import Recommend from './recommend/recommendmale.js'
import Tast from './taste/tast.js'
import Listitem from './free/free.js'
import Category from './category/category.js'
import Topice from './topice/Topice.js'
import axios from 'axios'


var malearr=['xx','xy','pc','gc','cq','dp','rbe','en']
var femalearr=['cy','yq','dq','gf','jd','cs','gd']
const TabPane = Tabs.TabPane;

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
    bookdata:{},
    febookdata:{}
   }
  }
  componentDidMount = () => {
    var _this=this;
    malearr.map((tag,i)=>{
    axios.request(
			{	
					url: 'http://ot7zo8t2i.bkt.clouddn.com/'+tag+'.json',
					method: 'get', 
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
    femalearr.map((tag,i)=>{
    axios.request(
			{	
					url: 'http://ot7zo8t2i.bkt.clouddn.com/'+tag+'.json',
					method: 'get', 
				}
			
		).then(function (response) {
        var febookdata=Object.assign({}, _this.state.febookdata);
    
        febookdata[i]=response.data.books;
				_this.setState({
				febookdata:febookdata})
			}).catch(function (error) {
					console.log(error)
			})

      
    })

  }
  
  render(){
    var bookdata=this.state.bookdata;
    var febookdata=this.state.febookdata;
    return   <div>
    <Tabs swipeable={false} className='manyTabs' defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab='推荐' key="1" style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Recommend bookdata={bookdata}/>
        </div>
      </TabPane>
      <TabPane tab='口味' key="2" style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Tast bookdata={bookdata}/>
        </div>
      </TabPane>
      <TabPane tab='免费' key="3"  style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
          <Listitem bookdata={bookdata}/>
        </div>
      </TabPane>
      <TabPane tab='分类' key="4"  style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor: '#fff' }}>
          <Category bookdata={bookdata} febookdata={febookdata}/>
        </div>
      </TabPane>
      <TabPane tab='专题' key="5"  style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          <Topice/>
        </div>
      </TabPane>
    </Tabs>
  </div>

  }

}
export default Tabsecond
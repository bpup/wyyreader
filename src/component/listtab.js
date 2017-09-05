import React, { Component } from 'react';
import Tabs from 'antd-mobile/lib/tabs'
import Recommend from './recommend/recommendmale.js'
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
  }
  render(){
    return   <div>
    <Tabs swipeable={false} className='manyTabs' defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab='推荐' key="1" style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Recommend/>
        </div>
      </TabPane>
      <TabPane tab='口味' key="2" style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content of Second Tab
        </div>
      </TabPane>
      <TabPane tab='免费' key="3"  style={{flexGrow:1}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content of Third Tab
        </div>
      </TabPane>
      <TabPane tab='排行' key="4"  style={{flexGrow:1}}>
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
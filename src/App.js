import React, { Component } from 'react';
import './css/App.css';
import Tabs from 'antd-mobile/lib/tabs'; 
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
const TabExample = () => (
  <div>
    <Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab='dsds' key="1">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content of First Tab
        </div>
      </TabPane>
      <TabPane tab='dsds' key="2">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content of Second Tab
        </div>
      </TabPane>
      <TabPane tab='dsds' key="3">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content of Third Tab
        </div>
      </TabPane>
    </Tabs>
  </div>
);
class App extends Component {
  render() {
    return (
      <div className="App">
       <TabExample/>
      </div>
    );
  }
}

export default App;






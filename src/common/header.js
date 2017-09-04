import React, { Component } from 'react';
import NavBar from 'antd-mobile/lib/nav-bar'
import Tabs from 'antd-mobile/lib/tabs'
import ListView from 'antd-mobile/lib/list-view'
import TabExample from '../component/male.js'
import '../css/header.css'

const TabPane = Tabs.TabPane;

let person=<svg className="icon icon-yonghu" style={{position:'relative',right:'.4rem'}} aria-hidden="true">
<use href="#icon-yonghu2"></use>
</svg>

let search=<svg className="icon icon-search" style={{position:'relative',right:'.4rem'}} aria-hidden="true">
<use href="#icon-sousuo"></use>
</svg>


function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
const TabIndex = () => (
  <div>
    <Tabs swipeable='false' className='tabs' defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>
      <TabPane className='totaltab' tab='男生' key="1">
        <div className="male">
        <TabExample/>
        </div>
      </TabPane>
      <TabPane className='totaltab' tab='女生' key="2">
      <div className="female">女生</div>        
      </TabPane>
      <TabPane className='totaltab' tab='出版' key="3">
      <div className="publish">出版</div>        
      </TabPane>
    </Tabs>
  </div>
);








let navbarindex=<NavBar className='topbar' leftContent={person}
      mode="light"
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={search}
    >
    <TabIndex/>
    
    </NavBar>

class NavBarindex extends React.Component{
     constructor(props){
		super(props)
	 }
	 render(){
		 return	navbarindex
	 }

}






export default NavBarindex
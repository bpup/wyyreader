import React, { Component } from 'react';
import NavBar from 'antd-mobile/lib/nav-bar'
import Tabs from 'antd-mobile/lib/tabs'
import Drawer from 'antd-mobile/lib/drawer'
import ListView from 'antd-mobile/lib/list-view'
import Card from 'antd-mobile/lib/card'
import List from 'antd-mobile/lib/list'
import Button from 'antd-mobile/lib/button'
import TabExample from '../component/listtab.js'
import '../css/header.css'
const Item = List.Item;
const Brief = Item.Brief;
const TabPane = Tabs.TabPane;

let person=<svg className="icon icon-yonghu"  style={{position:'relative',right:'.4rem'}} aria-hidden="true">
<use href="#icon-yonghu2"></use>
</svg>

let search=<svg className="icon icon-search" style={{position:'relative',right:'.4rem'}} aria-hidden="true">
<use href="#icon-sousuo"></use>
</svg>

let set=<svg className="icon icon-canshushezhi"  style={{position:'relative',right:'.4rem'}} aria-hidden="true">
<use href="#icon-canshushezhi"></use>
</svg>
let moon=<svg className="icon icon-yejian"  style={{position:'relative',right:'.4rem'}} aria-hidden="true">
<use href="#icon-yejian"></use>
</svg>


function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
const TabIndex = () => (
    <Tabs swipeable={false} className='tabs' defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
      <TabPane className='totaltab' tab='男生' key="1">
        <div className="male">
        <TabExample sort='male'/>
        </div>
      </TabPane>
      <TabPane className='totaltab' tab='女生' key="2">
      <div className="female"><TabExample/></div>        
      </TabPane>
      <TabPane className='totaltab' tab='出版' key="3">
      <div className="publish"> <TabExample/></div>        
      </TabPane>
    </Tabs>
);




    const sidebar = <div className='sidber-avatar'>
    <Card full>
      <Card.Header
        title={<Button className="btn"
         type="ghost" 
         size="large"
         activeStyle={{
           background:'rgba(235,100,96,.4)',
           color:'#fff'
         }}
         style={{color:'#ed6460',
                 borderColor:'#ed6460',
                 width:'1.6rem',
                 marginLeft:'.44rem'}}
         >登陆</Button>}
        thumb="http://ovj4n4xu6.bkt.clouddn.com/%E5%A4%B4%E5%83%8F.svg"
        thumbStyle={{borderRadius:'50%',width:'1.4rem',height:'1.4rem'}}
      />
      <Card.Body>
      <List>
      <Item
        onClick={() => {}}
      ><span className='greyer'>余额</span><span>充值送红包</span>
      <Button className="btn"
         type="ghost" 
         size="large"
         activeStyle={{
           background:'rgba(235,100,96,.4)',
           color:'#fff'
         }}
         style={{color:'#ed6460',
                 borderColor:'#ed6460',
                 marginLeft:'.44rem',
                 width:'1.2rem',
                 height:'.7rem',
                 float:'right',
                 lineHeight:'.7rem',
                 position:'relative',
                 top:'-0.08rem'
                 }}
         >充值</Button>
      
      </Item>
      <Item
        onClick={() => {}}
      ><span className='greyer'>红包</span><span>红包抵阅点</span>
      <Button className="btn"
         type="ghost" 
         size="large"
         activeStyle={{
           background:'rgba(235,100,96,.4)',
           color:'#fff'
         }}
         style={{color:'#ed6460',
                 borderColor:'#ed6460',
                 marginLeft:'.44rem',
                 width:'1.2rem',
                 height:'.7rem',
                 float:'right',
                 lineHeight:'.7rem',
                 position:'relative',
                 top:'-0.08rem'
                 }}
         >兑换
         </Button>
      
      </Item>
      <Item
        onClick={() => {}}
      ><span className='greyer'>商城</span><span>积分换好礼</span>
      <Button className="btn"
         type="ghost" 
         size="large"
         activeStyle={{
           background:'rgba(235,100,96,.4)',
           color:'#fff'
         }}
         style={{color:'#ed6460',
                 borderColor:'#ed6460',
                 marginLeft:'.44rem',
                 width:'1.2rem',
                 height:'.7rem',
                 float:'right',
                 lineHeight:'.7rem',
                 position:'relative',
                 top:'-0.08rem'
                 }}
         >兑换</Button>
      
      </Item>
   
     
    </List>
    <List>
    <Item thumb="http://ovj4n4xu6.bkt.clouddn.com/1.svg">我的消息</Item>
    <Item thumb="http://ovj4n4xu6.bkt.clouddn.com/2.svg"

    >每日签到</Item>
    <Item thumb="http://ovj4n4xu6.bkt.clouddn.com/3.svg"

    >阅读口味</Item>
    <Item thumb="http://ovj4n4xu6.bkt.clouddn.com/4.svg"
 
    >阅读圈</Item>



    </List>
    <List>
    <Item thumb="http://ovj4n4xu6.bkt.clouddn.com/5.svg">已购和上传</Item>
    <Item thumb="http://ovj4n4xu6.bkt.clouddn.com/6.svg">笔记</Item>
    <Item thumb="http://ovj4n4xu6.bkt.clouddn.com/7.svg">文章收藏</Item>
    </List>

    <List>
    <Item thumb="http://ovj4n4xu6.bkt.clouddn.com/8.svg">精彩活动</Item>
    <Item thumb="http://ovj4n4xu6.bkt.clouddn.com/9.svg">帮助与反馈</Item>
    </List>
  
      </Card.Body>

     </Card>
  </div>

     



class NavBarindex extends React.Component{
     constructor(props){ 
     super(props)
     this.onOpenChange=this.onOpenChange.bind(this)
     this.state = {
      open: false,
    }
   }
   onOpenChange = () => {
    this.setState({ open: !this.state.open });
  }
	 render(){
    var open=this.state.open;    
		 return	<NavBar className='topbar' leftContent={person}
     mode="light"
     onLeftClick={this.onOpenChange}
     rightContent={search}
   >
  <Drawer

    touch={false}
    className="my-drawer"
    style={{ 
      minHeight: document.documentElement.clientHeight - 200,
     }}
      sidebarStyle={{
        width:'80%' 
      }}
    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
    sidebar={sidebar}
    open={open}
    onOpenChange={this.onOpenChange}
    >
    </Drawer>
   <TabIndex/>
   
   </NavBar>
	 }

}








export default NavBarindex
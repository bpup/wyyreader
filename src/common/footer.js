import React, { Component } from 'react';
import TabBar from 	'antd-mobile/lib/tab-bar'
import Icon from 	'antd-mobile/lib/icon'
import NavBarindex from './header.js'

class TabBarCommon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div>{pageText}</div>
      </div>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="书城"
          key="书城"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(http://ovj4n4xu6.bkt.clouddn.com/%E4%B9%A6.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'urlhttp://ovj4n4xu6.bkt.clouddn.com/%E4%B9%A6.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent(<NavBarindex/>)}
        </TabBar.Item>
        <TabBar.Item
		icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(http://ovj4n4xu6.bkt.clouddn.com/%E4%B9%A62.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(http://ovj4n4xu6.bkt.clouddn.com/%E4%B9%A62.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          title="书架"
          key="书架"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('书架')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(http://ovj4n4xu6.bkt.clouddn.com/%E8%AE%A2%E9%98%85.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(http://ovj4n4xu6.bkt.clouddn.com/%E8%AE%A2%E9%98%85.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          title="订阅"
          key="订阅"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
        >
          {this.renderContent('订阅')}
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default TabBarCommon
import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.min.css'
import BookMoreList from './component/recommend/entry.js'
import {
	HashRouter,
	Route,
	Switch
  } from 'react-router-dom'



class Entry extends React.Component {
	
	
	  render() {

		return (
			<HashRouter>
			<Switch>
			  <Route exact path='/' component={App}/>
			  <Route path='/more' component={BookMoreList}/>
			</Switch>
			</HashRouter>
		)
	  }
	}
	
ReactDOM.render(<Entry />, document.getElementById('root'));
registerServiceWorker();

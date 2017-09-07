import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.min.css'
import BookMoreList from './component/recommend/entry.js'
import Personalset from './component/taste/personalset.js'
import {
	HashRouter,
	Route,
	Switch
	} from 'react-router-dom'
import axios from 'axios'
import { Provider } from 'react-redux'
import { createStore } from 'redux'




 const reducer = (state =[] , action) => {
	switch (action.type) {
		case 'UNRESIGER':
			return Object.assign({}, action.payload)
		default:
			return state
	}
}
 const store=createStore(reducer)

class Entry extends React.Component {

	
	  render() {

		return (
			<HashRouter>
			<Switch>
			  <Route exact path='/' component={App}/>
			  <Route path='/more' component={BookMoreList}/>
			  <Route path='/personset' component={Personalset}/>
			</Switch>
			</HashRouter>
		)
	  }
	}
	
ReactDOM.render(
<Provider
store={store}
><Entry /></Provider>, document.getElementById('root'));
registerServiceWorker();

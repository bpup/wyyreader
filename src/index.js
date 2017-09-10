import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.min.css'
import BookMoreList from './component/recommend/entry.js'
import Personalset from './component/taste/personalset.js'
import Infoinput from './component/taste/infoinput.js'
import BookclaasList from './component/category/classfiy.js'
import {
	Route,
	BrowserRouter ,
	Switch
	} from 'react-router-dom'
	



class Entry extends React.Component {

	
	  render() {

		return (
			<BrowserRouter>	
			<Switch>			
			  <Route exact path='/' component={App}/>
			  <Route path='/more' component={BookMoreList}/>
			  <Route exact path='/personset' component={Personalset}/>
			  <Route path='/personset/infoinput' component={Infoinput}/>
			  <Route path='/class' component={BookclaasList}/>
			 </Switch> 
			</BrowserRouter>
			  
		)
	  }
	}
	
ReactDOM.render(<Entry />, document.getElementById('root'));
registerServiceWorker();

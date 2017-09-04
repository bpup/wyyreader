import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

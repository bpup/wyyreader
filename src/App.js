import React, { Component } from 'react';
import './css/App.css';
import NavBarindex from './common/header.js' 
import TabBarCommon from './common/footer.js' 
class App extends Component {

  render() {
    return (
      <div className="App">
        <TabBarCommon/>
      </div>
    );
  }
}


export default App;






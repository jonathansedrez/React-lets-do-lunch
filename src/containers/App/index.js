import React, { Component } from 'react';
import { Router } from '@reach/router';

import Home from '../Home';
import Admin from '../Admin';
import Header from '../../components/Header';

class App extends Component {
  render() { 
    return (
      <div>
        <Header /> 
        <Router>
          <Home path='/'/>
          <Admin path='admin'/>
        </Router>
      </div>
    );
  }
}
 
export default App;

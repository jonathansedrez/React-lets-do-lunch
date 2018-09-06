import React, { Component } from 'react';
import { Router } from '@reach/router';

import Home from '../Home';
import Admin from '../Admin';
import Header from '../../components/Header';
import Wrapper from './styled';

class App extends Component {
  render() { 
    return (
      <Wrapper>
        <Header /> 
        <Router>
          <Home path='/'/>
          <Admin path='admin'/>
        </Router>
      </Wrapper>
    );
  }
}
 
export default App;

import React, { Component } from 'react';

import {Menu, Home, Admin} from './styled';

class Header extends Component {
  render() { 
    return (
      <Menu>
        <Home to="/">Home</Home>
        <Admin to="admin">Admin</Admin>
      </Menu>
    );
  }
}
 
export default Header;
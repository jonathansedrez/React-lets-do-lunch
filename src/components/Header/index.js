import React, { Component } from 'react';

import {Menu, MenuLink} from './styled';

class Header extends Component {
  render() { 
    return (
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="admin">Admin</MenuLink>
      </Menu>
    );
  }
}
 
export default Header;
import styled from 'styled-components';
import { Link } from '@reach/router';
import adminImage from '../../icons/admin.svg'
import homeImage from '../../icons/home.svg'

export const Menu = styled.nav`
  background-color: #fff;
  height: 72px;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
  position: fixed;
  box-shadow: 0px 0px 5px;
`

export const MenuLink = styled(Link)`
  position: relative;
  top: 24px;
  font-size: 1.5em;
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
  margin-left: 40px;
  text-decoration: none;
  color: #444;

  &:hover {
    border-bottom: 1px solid #d17070;
  }
`
export const Home = MenuLink.extend`
  &:before {
    display: inline-block;
    margin-right: 4px;
    content: '';
    background: url(${homeImage}) no-repeat;
    background-size: cover;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
`
export const Admin = MenuLink.extend`
  &:before {
    display: inline-block;
    margin-right: 4px;
    content: '';
    background: url(${adminImage}) no-repeat;
    width: 22px;    
    height: 22px;
    background-size: cover;
    cursor: pointer;
  }
`
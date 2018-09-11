import styled from 'styled-components';

export const TableRest = styled.table`
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 5px;
`

export const Td = styled.td`
  box-shadow: 1px 1px 5px grey;
  background-color: #fff;
  border-radius: 15px;
  padding: 0px 15px;
  text-align: center;
`

export const TdAmount = Td.extend`
  &:before {
    content: 'R$';
    font-size: 1.2em;
    margin-right: 10px;
    color: #9e9e9e;
  }
`

export const TdAddress = Td.extend`
  text-align: left;
  padding: 0px 16px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`

export const TdButtons = Td.extend`
  box-shadow: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #d6d6d6;
`

export const Id = Td.extend`
  display: none
`

import React, { Component } from 'react';

import { TableRest, Td, TdAddress, TdAmount, TdButtons, Id} from './styled';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

class Table extends Component {
  render() {    
    const {data} = this.props
    return (
      <TableRest>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Endreço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map( row => {
            return (
              <tr key={row._id}>
                <Id>{row._id}</Id>
                <Td>{row.name}</Td>
                <TdAmount>{row.amount}</TdAmount>
                <TdAddress>{row.address}</TdAddress>
                <TdButtons>
                  <EditButton />
                  <DeleteButton />
                </TdButtons>
              </tr>
            )}
          )}
        </tbody>
      </TableRest>
    )
  }
}
 
export default Table;
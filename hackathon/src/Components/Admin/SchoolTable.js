import React from 'react';
import {Table} from 'react-materialize';

const schoolTable = () => (
    <div>
        <Table>
  <thead>
    <tr>
      <th data-field="id">Escuela</th>
      <th data-field="name">Dirección</th>
      <th data-field="price">Telefono</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Escuela 01</td>
      <td>Dirección #301</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <td>Escuela 02</td>
      <td>Dirección #302</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <td>Escuela 03</td>
      <td>Dirección #303</td>
      <td>1234567890</td>
    </tr>
  </tbody>
</Table>
    </div>
)

export default schoolTable
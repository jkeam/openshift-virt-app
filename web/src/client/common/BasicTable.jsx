import React, { useState } from 'react';
import {
  Table as PTable,
  Caption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td
} from '@patternfly/react-table';


export default function BasicTable({ caption, data, rows, cols }) {
  
  return (
    <React.Fragment>
      <PTable aria-label="Basic table">
        <Caption>{caption}</Caption>
        <Thead>
          <Tr>
            { (cols || []).map((item) => (<Th>{item}</Th>)) }
          </Tr>
        </Thead>
        <Tbody>
          {(data || []).map((item) => (
            <Tr key={item.id}>
              {rows(item).map((row, i) => (<Td dataLabel={cols[i]}>{row}</Td>))}
            </Tr>
          ))}
        </Tbody>
      </PTable>
    </React.Fragment>
  );
};

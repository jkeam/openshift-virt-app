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
            { (cols || []).map((item, i) => (<Th key={i}>{item}</Th>)) }
          </Tr>
        </Thead>
        <Tbody>
          {(data || []).map((item, i) => (
            <Tr key={i}>
              {rows(item).map((row, i) => (<Td dataLabel={cols[i]} key={i}>{row}</Td>))}
            </Tr>
          ))}
        </Tbody>
      </PTable>
    </React.Fragment>
  );
};

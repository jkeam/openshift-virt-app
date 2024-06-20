import React, { useState } from 'react';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@patternfly/react-core';
import {
  Table as PTable,
  Caption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td
} from '@patternfly/react-table';


export default function Table() {
  const [exampleChoice, setExampleChoice] = useState('default');
  // This state is just for the ToggleGroup in this example and isn't necessary for Table usage.
  const onExampleTypeChange = (event) => {
    const id = event.currentTarget.id;
    setExampleChoice(id);
  };

  // In real usage, this data would come from some external source like an API via props.
  const repositories = [
    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },
    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },
    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  return (
    <React.Fragment>
      <ToggleGroup aria-label="Default with single selectable">
        <ToggleGroupItem
          text="Default"
          buttonId="default"
          isSelected={exampleChoice === 'default'}
          onChange={onExampleTypeChange}
        />
        <ToggleGroupItem
          text="Compact"
          buttonId="compact"
          isSelected={exampleChoice === 'compact'}
          onChange={onExampleTypeChange}
        />
        <ToggleGroupItem
          text="Compact borderless"
          buttonId="compactBorderless"
          isSelected={exampleChoice === 'compactBorderless'}
          onChange={onExampleTypeChange}
        />
      </ToggleGroup>
      <PTable
        aria-label="Simple table"
        variant={exampleChoice !== 'default' ? 'compact' : undefined}
        borders={exampleChoice !== 'compactBorderless'}
      >
        <Caption>Simple table using composable components</Caption>
        <Thead>
          <Tr>
            <Th>{columnNames.name}</Th>
            <Th>{columnNames.branches}</Th>
            <Th>{columnNames.prs}</Th>
            <Th>{columnNames.workspaces}</Th>
            <Th>{columnNames.lastCommit}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {repositories.map((repo) => (
            <Tr key={repo.name}>
              <Td dataLabel={columnNames.name}>{repo.name}</Td>
              <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
              <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
              <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
              <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
            </Tr>
          ))}
        </Tbody>
      </PTable>
    </React.Fragment>
  );
};

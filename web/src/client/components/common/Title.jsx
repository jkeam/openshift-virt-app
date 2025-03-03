import React from 'react';
import {
  PageSection,
  Content
} from '@patternfly/react-core';

export default function Title({ value, subtitle }) {
  return(
    <PageSection hasBodyWrapper={false}>
      <Content>
        <Content component="h1">{ value }</Content>
        <Content component="p"> { subtitle } </Content>
      </Content>
    </PageSection>
  );
}

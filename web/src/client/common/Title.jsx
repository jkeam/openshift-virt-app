import React from 'react';
import {
  PageSection,
  TextContent,
  PageSectionVariants,
  Text
} from '@patternfly/react-core';

export default function Title({ value, subtitle }) {
  return(
    <PageSection variant={PageSectionVariants.light}>
      <TextContent>
        <Text component="h1">{ value }</Text>
        <Text component="p"> { subtitle } </Text>
      </TextContent>
    </PageSection>
  );
}

import React from 'react';
import { SkipToContent } from '@patternfly/react-core';

export default function ContentSkip({ pageId }) {
  return <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;
}

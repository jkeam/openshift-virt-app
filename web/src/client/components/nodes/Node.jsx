import { useState, useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { getNodes } from '../../utils/store.js'

export default function Node() {
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    (async () => {
      const fetched = await getNodes();
      setNodes(fetched);
    })();

    return () => {
      // unmount
    };
  }, []);

  const cols = ['Name', 'CPUs', 'Memory', 'Host IP'];
  const rows = (item) => {
    return [
      item.name,
      item.cpu,
      item.memory,
      item.hostIp,
    ];
  };

  return (
    <PageSection>
      <BasicTable caption="" data={nodes} rows={rows} cols={cols} />
    </PageSection>
  );
}

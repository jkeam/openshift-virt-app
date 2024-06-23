import { useState, useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { fetchNodes } from '../../utils/api.js'

export default function Node() {
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    (async () => {
      const fetched = await fetchNodes();
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
      item.host_ip
    ];
  };

  return (
    <PageSection>
      <BasicTable caption="" data={nodes} rows={rows} cols={cols} />
    </PageSection>
  );
}

import { useState, useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { fetchVms } from '../../utils/api.js'

export default function Vm() {
  const [vms, setVms] = useState([]);
  useEffect(() => {
    (async () => {
      const fetched = await fetchVms();
      setVms(fetched);
    })();

    return () => {
      // unmount
    };
  }, []);

  const cols = ['Name', 'OS', 'CPUs', 'Memory', 'Storage', 'Network'];
  const rows = (item) => {
    return [
      item.name,
      item.os,
      item.cpu,
      item.memory,
      (item.data_volumes || []).map(i => `${i.name} (${i['storage']['resources']['requests']['storage']})`).join(', '),
      (item.interfaces || []).map(i => `${i.name} (${i.model})`).join(', ')
    ];
  };

  return (
    <PageSection>
      <BasicTable caption="" data={vms} rows={rows} cols={cols} />
    </PageSection>
  );
}

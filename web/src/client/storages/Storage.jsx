import { useState, useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { fetchStorages } from '../api.js'

export default function Storage() {
  const [storages, setStorages] = useState([]);
  useEffect(() => {
    (async () => {
      const fetched = await fetchStorages();
      setStorages(fetched);
    })();

    return () => {
      // unmount
    };
  }, []);

  const cols = ['Name', 'VM', 'PVC Name', 'Size', 'Class'];
  const rows = (item) => {
    return [
      item.name,
      item.vm,
      item.pvc,
      item.size,
      item.storage_class,
    ];
  };

  return (
    <PageSection>
      <BasicTable caption="" data={vms} rows={rows} cols={cols} />
    </PageSection>
  );
}

import { useState, useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { getStorages } from '../../utils/store.js'
import { path } from 'ramda';

export default function Storage() {
  const [storages, setStorages] = useState([]);
  useEffect(() => {
    (async () => {
      const fetched = await getStorages();
      setStorages(fetched);
    })();

    return () => {
      // unmount
    };
  }, []);

  const cols = ['Name', 'VM', 'Source', 'Size', 'Class'];
  const rows = (item) => {
    return [
      item.name,
      item.vm,
      item.source,
      item.storage,
      item.storageClass,
    ];
  };

  return (
    <PageSection>
      <BasicTable caption="" data={storages} rows={rows} cols={cols} />
    </PageSection>
  );
}

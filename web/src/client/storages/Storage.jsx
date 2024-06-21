import { useState, useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { fetchStorages } from '../api.js'
import { path } from 'ramda';

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

  const cols = ['Name', 'VM', 'Source', 'Size', 'Class'];
  const rows = (item) => {
    let vm = '';
    if (item.vm && item.vm.length > 0) {
      vm = item.vm[0].name;
    }
    let storage = '';
    let storageClass = '';
    if (item.storage) {
      storage = path(['resources', 'requests', 'storage'], item.storage);
      storageClass = path(['storageClassName'], item.storage);
    }
    let source = '';
    if (item.source) {
      const itemSource = item.source;
      if (itemSource.http) {
        source = itemSource.http.url;
      } else if (itemSource.pvc) {
        source = [itemSource.pvc.namespace, itemSource.pvc.name].join(':');
      }
    }

    return [
      item.name,
      vm,
      source,
      storage,
      storageClass,
    ];
  };

  return (
    <PageSection>
      <BasicTable caption="" data={storages} rows={rows} cols={cols} />
    </PageSection>
  );
}

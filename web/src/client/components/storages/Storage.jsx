import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { getStorages, storagesAtom } from '../../utils/store.js'

export default function Storage() {
  const [storages, setStorages] = useAtom(storagesAtom);
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
    <PageSection hasBodyWrapper={false}>
      <BasicTable caption="" data={storages} rows={rows} cols={cols} />
    </PageSection>
  );
}

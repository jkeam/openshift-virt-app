import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { getNetworks, networksAtom } from '../../utils/store.js'

export default function Network() {
  const [interfaces, setInterfaces] = useAtom(networksAtom);
  useEffect(() => {
    (async () => {
      const fetched = await getNetworks();
      setInterfaces(fetched);
    })();

    return () => {
      // unmount
    };
  }, []);

  const cols = ['VM Name', 'Name', 'Model', 'MAC Addr', 'Ports'];
  const rows = (item) => {
    return [
      item.vmName,
      item.name,
      item.model,
      item.macAddress,
      item.ports
    ];
  };

  return (
    <PageSection>
      <BasicTable caption="" data={interfaces} rows={rows} cols={cols} />
    </PageSection>
  );
}

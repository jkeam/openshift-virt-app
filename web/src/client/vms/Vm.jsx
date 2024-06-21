import { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  PageSection,
} from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import {
  fetchInitialVMs
} from '../api.js'

export default function Vm() {
  const [vms, setVms] = useState([]);
  useEffect(() => {
    (async () => {
      const fetched = await fetchInitialVMs();
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
      (item.disks || []).map(i => i.name).join(', '),
      (item.interfaces || []).map(i => `${i.name}(${i.model})`).join(', ')
    ];
  };

  return (
    <PageSection>
      <BasicTable caption="" data={vms} rows={rows} cols={cols} />
    </PageSection>
  );
}
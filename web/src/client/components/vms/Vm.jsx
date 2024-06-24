import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { getVms, vmsAtom } from '../../utils/store.js'

export default function Vm() {
  const [vms, setVms] = useAtom(vmsAtom);
  useEffect(() => {
    (async () => {
      const fetched = await getVms();
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
      item.dataVolumes,
      item.interfaces,
    ];
  };

  return (
    <PageSection>
      <BasicTable caption="" data={vms} rows={rows} cols={cols} />
    </PageSection>
  );
}

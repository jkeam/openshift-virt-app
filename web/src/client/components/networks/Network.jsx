import { useState, useEffect } from 'react';
import { PageSection } from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { fetchVms } from '../../utils/api.js'

export default function Network() {
  const [interfaces, setInterfaces] = useState([]);
  useEffect(() => {
    (async () => {
      const fetched = await fetchVms();
      const fetchedInterfaces = [];
      for (const vm of fetched) {
        const vmName = vm.name;
        for (const inter of vm.interfaces) {
          let ports = '';
          if (inter.ports) {
            ports = inter.ports.map(port => `${port.name} ${port.port} (${port.protocol})`).join(', ');
          }
          fetchedInterfaces.push({
            vmName,
            name: inter.name,
            model: inter.model,
            macAddress: inter.macAddress,
            ports
          });
        }
      }
      setInterfaces(fetchedInterfaces);
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

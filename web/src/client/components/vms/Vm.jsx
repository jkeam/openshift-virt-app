import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import {
  PageSection,
  Select,
  SelectOption,
  SelectList,
  MenuToggle,
  Panel,
  PanelMain,
  PanelMainBody,
} from '@patternfly/react-core';
import BasicTable from '../common/BasicTable';
import { getVms, vmsAtom, getVmnamespaces, vmnamespacesAtom } from '../../utils/store.js'

export default function Vm() {
  const [vms, setVms] = useAtom(vmsAtom);
  const [vmnamespaces, setVmnamespaces] = useAtom(vmnamespacesAtom);
  const [filteredVms, setFilteredVms] = useState([]);
  const [isNamespaceSelectOpen, setNamespaceSelectIsOpen] = useState(false);
  const [selectedNamespace, setSelectedNamespace] = useState('Select namespace');
  useEffect(() => {
    (async () => {
      const fetched = await getVms();
      setVms(fetched);
      setFilteredVms([]);
      const fetchVmnamespaces = await getVmnamespaces();
      setVmnamespaces(fetchVmnamespaces);
    })();

    return () => {
      // unmount
    };
  }, []);

  const onToggleClick = () => {
    setNamespaceSelectIsOpen(!isNamespaceSelectOpen);
  };

  const onSelect = (_event, value) => {
    setSelectedNamespace(value);
    setFilteredVms(vms.filter(v => v.namespace === value));
    setNamespaceSelectIsOpen(false);
  };

  const toggle = toggleRef => (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isNamespaceSelectOpen} style={{width: '200px'}}>
      {selectedNamespace}
    </MenuToggle>
  );

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
    <PageSection hasBodyWrapper={false}>
      <Panel>
        <PanelMain>
          <PanelMainBody>
            Namespace: &nbsp;
            <Select
              isOpen={isNamespaceSelectOpen}
              onOpenChange={isOpen => setNamespaceSelectIsOpen(isOpen)}
              toggle={toggle}
              onSelect={onSelect}
              selected={selectedNamespace}
              shouldFocusToggleOnSelect
            >
              <SelectList>
                {vmnamespaces.map(v => <SelectOption value={v} key={v}>{v}</SelectOption>)}
              </SelectList>
            </Select>
          </PanelMainBody>
        </PanelMain>
      </Panel>
      { filteredVms.length > 0 && <BasicTable caption="VMs in selected namespace" data={filteredVms} rows={rows} cols={cols} /> }
    </PageSection>
  );
}

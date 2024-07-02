import { path } from 'ramda';

export const transformVms = (fetched) => {
  if (!fetched) {
    return [];
  }
  const transform = (item) => {
    return {
      name: item.name,
      os: item.os,
      cpu: item.cpu,
      memory: item.memory,
      dataVolumes: (item.data_volumes || []).map(i => `${i.name} (${i['storage']['resources']['requests']['storage']})`).join(', '),
      interfaces: (item.interfaces || []).map(i => `${i.name} (${i.model})`).join(', ')
    };
  };
  return fetched.map(transform);
};

export const transformNodes = (fetched) => {
  if (!fetched) {
    return [];
  }

  const transform = (item) => {
    return {
      name: item.name,
      cpu: item.cpu,
      memory: item.memory,
      hostIp: item.host_ip
    };
  };
  return fetched.map(transform);
};

export const transformStorages = (fetched) => {
  if (!fetched) {
    return [];
  }

  const transform = (item) => {
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

    return {
      name: item.name,
      vm,
      source,
      storage,
      storageClass,
    };
  };
  return fetched.map(transform);
};

export const transformNetworks = (fetched) => {
  if (!fetched) {
    return [];
  }

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
  return fetchedInterfaces;
};

export const transformVmnamespaces = (fetched) => {
  if (!fetched) {
    return [];
  }

  const fetchedVmnamespaces = [];
  for (const vm of fetched) {
    fetchedVmnamespaces.push(vm['namespace']);
  }
  return fetchedVmnamespaces;
};

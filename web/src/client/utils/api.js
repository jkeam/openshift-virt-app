export const fetchVms = async() => {
  const response = await fetch('/api/vms');
  const resp = await response.json();
  return resp['vms'];
}

export const fetchNodes = async() => {
  const response = await fetch('/api/nodes');
  const resp = await response.json();
  return resp['nodes'];
}

export const fetchStorages = async() => {
  const response = await fetch('/api/storages');
  const resp = await response.json();
  return resp['storages'];
}

export const fetchVmnamespaces = async() => {
  const response = await fetch('/api/vmnamespaces');
  const resp = await response.json();
  return resp['vmnamespaces'];
}

const API_BASE_URL = 'ocp-virt-app-api-jkeam.apps.tacos.dota-lab.iad.redhat.com';
export const fetchInitialVMs = async() => {
  const response = await fetch(`https://${API_BASE_URL}/vms`);
  const resp = await response.json();
  return resp['vms'];
  // return [
  //   { id: 1, name: 'one', os: 'two', cpus: 'three', memory: 'four', storage: 'five' },
  //   { id: 2, name: 'one - 2', os: null, cpus: null, memory: 'four - 2', storage: 'five - 2' },
  //   { id: 3, name: 'one - 3', os: 'two - 3', cpus: 'three - 3', memory: 'four - 3', storage: 'five - 3' }
  // ];
}

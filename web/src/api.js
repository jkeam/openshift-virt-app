const API_BASE_URL = 'ocp-virt-app-api:8080';
export const fetchInitialVMs = async() => {
  const response = await fetch(`http://${API_BASE_URL}/vms`);
  return await response.json();
  // return [
  //   { id: 1, name: 'one', os: 'two', cpus: 'three', memory: 'four', storage: 'five' },
  //   { id: 2, name: 'one - 2', os: null, cpus: null, memory: 'four - 2', storage: 'five - 2' },
  //   { id: 3, name: 'one - 3', os: 'two - 3', cpus: 'three - 3', memory: 'four - 3', storage: 'five - 3' }
  // ];
}

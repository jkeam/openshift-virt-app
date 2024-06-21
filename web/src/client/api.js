export const fetchInitialVMs = async() => {
  const response = await fetch('/api/vms');
  const resp = await response.json();
  return resp['vms'];
}

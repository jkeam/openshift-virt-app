import { atom } from 'jotai';
import {
  fetchVms,
  fetchNodes,
  fetchStorages,
  fetchVmnamespaces,
} from './api.js';
import {
  transformVms,
  transformNodes,
  transformStorages,
  transformNetworks,
  transformVmnamespaces,
} from './transformers.js';

export const vmsAtom = atom([]);
export const getVms = async () => {
  const fetched = await fetchVms();
  return transformVms(fetched);
};

export const nodesAtom = atom([]);
export const getNodes = async () => {
  const fetched = await fetchNodes();
  return transformNodes(fetched);
};

export const storagesAtom = atom([]);
export const getStorages = async () => {
  const fetched = await fetchStorages();
  return transformStorages(fetched);
}

export const networksAtom = atom([]);
export const getNetworks = async () => {
  const fetched = await fetchVms();
  return transformNetworks(fetched);
}

export const vmnamespacesAtom = atom([]);
export const getVmnamespaces = async () => {
  const fetched = await fetchVmnamespaces();
  return transformVmnamespaces(fetched);
}

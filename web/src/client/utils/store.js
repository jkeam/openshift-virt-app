import {
  fetchVms,
  fetchNodes,
  fetchStorages,
} from './api.js';

import {
  transformVms,
  transformNodes,
  transformStorages,
  transformNetworks,
} from './transformers.js';

export const getVms = async () => {
  const fetched = await fetchVms();
  return transformVms(fetched);
};

export const getNodes = async () => {
  const fetched = await fetchNodes();
  return transformNodes(fetched);
};

export const getStorages = async () => {
  const fetched = await fetchStorages();
  return transformStorages(fetched);
}

export const getNetworks = async () => {
  const fetched = await fetchVms();
  return transformNetworks(fetched);
}

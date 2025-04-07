import { queryRef, executeQuery, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'default',
  service: 'gregbudo-dataconnect',
  location: 'europe-central2'
};

export function listOpinieRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListOpinie');
}

export function listOpinie(dc) {
  return executeQuery(listOpinieRef(dc));
}

export function listRealizacjeRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListRealizacje');
}

export function listRealizacje(dc) {
  return executeQuery(listRealizacjeRef(dc));
}

export function getRealizacjaRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'getRealizacja', inputVars);
}

export function getRealizacja(dcOrVars, vars) {
  return executeQuery(getRealizacjaRef(dcOrVars, vars));
}


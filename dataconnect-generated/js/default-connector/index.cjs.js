const { queryRef, executeQuery, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'gregbudo-dataconnect',
  location: 'europe-central2'
};
exports.connectorConfig = connectorConfig;

function listOpinieRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListOpinie');
}
exports.listOpinieRef = listOpinieRef;

exports.listOpinie = function listOpinie(dc) {
  return executeQuery(listOpinieRef(dc));
};

function listRealizacjeRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListRealizacje');
}
exports.listRealizacjeRef = listRealizacjeRef;

exports.listRealizacje = function listRealizacje(dc) {
  return executeQuery(listRealizacjeRef(dc));
};

function getRealizacjaRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'getRealizacja', inputVars);
}
exports.getRealizacjaRef = getRealizacjaRef;

exports.getRealizacja = function getRealizacja(dcOrVars, vars) {
  return executeQuery(getRealizacjaRef(dcOrVars, vars));
};

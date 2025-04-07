const { listOpinieRef, listRealizacjeRef, getRealizacjaRef, connectorConfig } = require('../index.cjs.js');
const { CallerSdkTypeEnum } = require('firebase/data-connect');
const { useDataConnectQuery, validateReactArgs } = require('@tanstack-query-firebase/react/data-connect');


exports.useListOpinie = function useListOpinie(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts } = validateReactArgs(connectorConfig, dcOrOptions, options);
  const ref = listOpinieRef(dcInstance);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

exports.useListRealizacje = function useListRealizacje(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts } = validateReactArgs(connectorConfig, dcOrOptions, options);
  const ref = listRealizacjeRef(dcInstance);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

exports.useGetRealizacja = function useGetRealizacja(dcOrVars, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateReactArgs(connectorConfig, dcOrVars, varsOrOptions, options, true, false);
  const ref = getRealizacjaRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}
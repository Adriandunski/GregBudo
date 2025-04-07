import { ListOpinieData, ListRealizacjeData, GetRealizacjaData, GetRealizacjaVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useListOpinie(options?: useDataConnectQueryOptions<ListOpinieData>): UseDataConnectQueryResult<ListOpinieData, undefined>;
export function useListOpinie(dc: DataConnect, options?: useDataConnectQueryOptions<ListOpinieData>): UseDataConnectQueryResult<ListOpinieData, undefined>;

export function useListRealizacje(options?: useDataConnectQueryOptions<ListRealizacjeData>): UseDataConnectQueryResult<ListRealizacjeData, undefined>;
export function useListRealizacje(dc: DataConnect, options?: useDataConnectQueryOptions<ListRealizacjeData>): UseDataConnectQueryResult<ListRealizacjeData, undefined>;

export function useGetRealizacja(vars?: GetRealizacjaVariables, options?: useDataConnectQueryOptions<GetRealizacjaData>): UseDataConnectQueryResult<GetRealizacjaData, GetRealizacjaVariables>;
export function useGetRealizacja(dc: DataConnect, vars?: GetRealizacjaVariables, options?: useDataConnectQueryOptions<GetRealizacjaData>): UseDataConnectQueryResult<GetRealizacjaData, GetRealizacjaVariables>;

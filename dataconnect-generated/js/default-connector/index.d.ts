import { ConnectorConfig, DataConnect, QueryRef, QueryPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;


export interface GetRealizacjaData {
  realizacjas: ({
    id: UUIDString;
    typ?: string | null;
    typ2?: string | null;
    opis?: string | null;
  } & Realizacja_Key)[];
}

export interface GetRealizacjaVariables {
  typ?: string | null;
}

export interface ListOpinieData {
  opinies: ({
    id: UUIDString;
    name?: string | null;
    opinion?: string | null;
    scrPhoto?: string | null;
    stars?: number | null;
  } & Opinie_Key)[];
}

export interface ListRealizacjeData {
  realizacjas: ({
    id: UUIDString;
    typ?: string | null;
    typ2?: string | null;
    opis?: string | null;
  } & Realizacja_Key)[];
}

export interface Opinie_Key {
  id: UUIDString;
  __typename?: 'Opinie_Key';
}

export interface Realizacja_Key {
  id: UUIDString;
  __typename?: 'Realizacja_Key';
}


/* Allow users to create refs without passing in DataConnect */
export function listOpinieRef(): QueryRef<ListOpinieData, undefined>;
/* Allow users to pass in custom DataConnect instances */
export function listOpinieRef(dc: DataConnect): QueryRef<ListOpinieData, undefined>;

export function listOpinie(): QueryPromise<ListOpinieData, undefined>;
export function listOpinie(dc: DataConnect): QueryPromise<ListOpinieData, undefined>;


/* Allow users to create refs without passing in DataConnect */
export function listRealizacjeRef(): QueryRef<ListRealizacjeData, undefined>;
/* Allow users to pass in custom DataConnect instances */
export function listRealizacjeRef(dc: DataConnect): QueryRef<ListRealizacjeData, undefined>;

export function listRealizacje(): QueryPromise<ListRealizacjeData, undefined>;
export function listRealizacje(dc: DataConnect): QueryPromise<ListRealizacjeData, undefined>;


/* Allow users to create refs without passing in DataConnect */
export function getRealizacjaRef(vars?: GetRealizacjaVariables): QueryRef<GetRealizacjaData, GetRealizacjaVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getRealizacjaRef(dc: DataConnect, vars?: GetRealizacjaVariables): QueryRef<GetRealizacjaData, GetRealizacjaVariables>;

export function getRealizacja(vars?: GetRealizacjaVariables): QueryPromise<GetRealizacjaData, GetRealizacjaVariables>;
export function getRealizacja(dc: DataConnect, vars?: GetRealizacjaVariables): QueryPromise<GetRealizacjaData, GetRealizacjaVariables>;


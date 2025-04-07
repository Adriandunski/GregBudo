# Table of Contents
- [**Overview**](#generated-typescript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListOpinie*](#listopinie)
  - [*ListRealizacje*](#listrealizacje)
  - [*getRealizacja*](#getrealizacja)
- [**Mutations**](#mutations)

# Generated TypeScript README
This README will guide you through the process of using the generated TypeScript SDK package for the connector `default`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@firebasegen/default-connector` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `default`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```javascript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListOpinie
You can execute the `ListOpinie` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
listOpinie(): QueryPromise<ListOpinieData, undefined>;

listOpinieRef(): QueryRef<ListOpinieData, undefined>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
listOpinie(dc: DataConnect): QueryPromise<ListOpinieData, undefined>;

listOpinieRef(dc: DataConnect): QueryRef<ListOpinieData, undefined>;
```

### Variables
The `ListOpinie` query has no variables.
### Return Type
Recall that executing the `ListOpinie` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListOpinieData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface ListOpinieData {
  opinies: ({
    id: UUIDString;
    name?: string | null;
    opinion?: string | null;
    scrPhoto?: string | null;
    stars?: number | null;
  } & Opinie_Key)[];
}
```
### Using `ListOpinie`'s action shortcut function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listOpinie } from '@firebasegen/default-connector';


// Call the `listOpinie()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listOpinie();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listOpinie(dataConnect);

console.log(data.opinies);

// Or, you can use the `Promise` API.
listOpinie().then((response) => {
  const data = response.data;
  console.log(data.opinies);
});
```

### Using `ListOpinie`'s `QueryRef` function

```javascript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listOpinieRef } from '@firebasegen/default-connector';


// Call the `listOpinieRef()` function to get a reference to the query.
const ref = listOpinieRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listOpinieRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.opinies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.opinies);
});
```

## ListRealizacje
You can execute the `ListRealizacje` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
listRealizacje(): QueryPromise<ListRealizacjeData, undefined>;

listRealizacjeRef(): QueryRef<ListRealizacjeData, undefined>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
listRealizacje(dc: DataConnect): QueryPromise<ListRealizacjeData, undefined>;

listRealizacjeRef(dc: DataConnect): QueryRef<ListRealizacjeData, undefined>;
```

### Variables
The `ListRealizacje` query has no variables.
### Return Type
Recall that executing the `ListRealizacje` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListRealizacjeData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface ListRealizacjeData {
  realizacjas: ({
    id: UUIDString;
    typ?: string | null;
    typ2?: string | null;
    opis?: string | null;
  } & Realizacja_Key)[];
}
```
### Using `ListRealizacje`'s action shortcut function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listRealizacje } from '@firebasegen/default-connector';


// Call the `listRealizacje()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listRealizacje();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listRealizacje(dataConnect);

console.log(data.realizacjas);

// Or, you can use the `Promise` API.
listRealizacje().then((response) => {
  const data = response.data;
  console.log(data.realizacjas);
});
```

### Using `ListRealizacje`'s `QueryRef` function

```javascript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listRealizacjeRef } from '@firebasegen/default-connector';


// Call the `listRealizacjeRef()` function to get a reference to the query.
const ref = listRealizacjeRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listRealizacjeRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.realizacjas);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.realizacjas);
});
```

## getRealizacja
You can execute the `getRealizacja` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
getRealizacja(vars?: GetRealizacjaVariables): QueryPromise<GetRealizacjaData, GetRealizacjaVariables>;

getRealizacjaRef(vars?: GetRealizacjaVariables): QueryRef<GetRealizacjaData, GetRealizacjaVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
getRealizacja(dc: DataConnect, vars?: GetRealizacjaVariables): QueryPromise<GetRealizacjaData, GetRealizacjaVariables>;

getRealizacjaRef(dc: DataConnect, vars?: GetRealizacjaVariables): QueryRef<GetRealizacjaData, GetRealizacjaVariables>;
```

### Variables
The `getRealizacja` query has an optional argument of type `GetRealizacjaVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface GetRealizacjaVariables {
  typ?: string | null;
}
```
### Return Type
Recall that executing the `getRealizacja` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetRealizacjaData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface GetRealizacjaData {
  realizacjas: ({
    id: UUIDString;
    typ?: string | null;
    typ2?: string | null;
    opis?: string | null;
  } & Realizacja_Key)[];
}
```
### Using `getRealizacja`'s action shortcut function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getRealizacja, GetRealizacjaVariables } from '@firebasegen/default-connector';

// The `getRealizacja` query has an optional argument of type `GetRealizacjaVariables`:
const getRealizacjaVars: GetRealizacjaVariables = {
  typ: ..., // optional
};

// Call the `getRealizacja()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getRealizacja(getRealizacjaVars);
// Variables can be defined inline as well.
const { data } = await getRealizacja({ typ: ..., });
// Since all variables are optional for this query, you can omit the `GetRealizacjaVariables` argument.
const { data } = await getRealizacja();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getRealizacja(dataConnect, getRealizacjaVars);

console.log(data.realizacjas);

// Or, you can use the `Promise` API.
getRealizacja(getRealizacjaVars).then((response) => {
  const data = response.data;
  console.log(data.realizacjas);
});
```

### Using `getRealizacja`'s `QueryRef` function

```javascript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getRealizacjaRef, GetRealizacjaVariables } from '@firebasegen/default-connector';

// The `getRealizacja` query has an optional argument of type `GetRealizacjaVariables`:
const getRealizacjaVars: GetRealizacjaVariables = {
  typ: ..., // optional
};

// Call the `getRealizacjaRef()` function to get a reference to the query.
const ref = getRealizacjaRef(getRealizacjaVars);
// Variables can be defined inline as well.
const ref = getRealizacjaRef({ typ: ..., });
// Since all variables are optional for this query, you can omit the `GetRealizacjaVariables` argument.
const ref = getRealizacjaRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getRealizacjaRef(dataConnect, getRealizacjaVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.realizacjas);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.realizacjas);
});
```

# Mutations

No mutations were generated for the `default` connector.

If you want to learn more about how to use mutations in Data Connect, you can follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).


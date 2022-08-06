import { singular } from "./helpers/plural";
import { capitalize } from "./helpers/capitalize";
import { findRootPath } from "./helpers/findRootPath";

const fs = require('fs');
const path = require('path');

let rootPath = findRootPath();
const store = path.join(rootPath, './common/store.ts');
const requests = path.join(rootPath, './common/types/requests.ts');
const responses = path.join(rootPath, './common/types/responses.ts');

const servicePointer = '  // END OF ENDPOINTS';
const typePointer = '// END OF TYPES';
const exportPointer = '// END OF EXPORTS';

const importPointer = '// END OF IMPORTS';
const middlewarePointer = '// END OF MIDDLEWARE';
const functionPointer = '// END OF FUNCTION_EXPORTS';
const reducerPointer = '// END OF REDUCERS';


const routes = path.join(rootPath, './mobile/app/routes.tsx');
const mobileScreens = path.join(rootPath, './mobile/app/screens');
const routeUrls = path.join(rootPath, './mobile/app/route-urls.ts');
const routeUrlsPointer = '// END OF SCREENS';
const routesImportPointer = '// END OF IMPORT';
const routesScreensPointer = '// END OF SCREENS';



const capitlizeFirst =  function(str:string) {
  // checks for null, undefined and empty string
  if (!str) return "";
  return str.match("^[a-z]") ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}

const functionName = function (action:string, prefix:string) {
    const post = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    const actionParts = action.split('_');
    return  actionParts[0].toLowerCase() + post;
};

async function writeGeneric(path:string, string:string,  pointer:string, description:string, alreadyExistsString=string, ) {
  console.log("Writing " + description)
  let res = fs.readFileSync(path, 'utf8');
  if (res.includes(alreadyExistsString)) {
    console.log(description+" already exist")
    return
  }
  if(!res.includes(pointer)){
    console.log(description+" pointer does not exist!")
    return
  }
  res = res.replace(pointer, `${string}\n  ${pointer}`);
  fs.writeFileSync(path, res, "utf8")
}

export async function writeRequestTypes(action: "create" | "update" | "patch" | "delete" | "get", name:string,isPlural?:boolean) {
  const includeId = action !== 'create' && (action!=='get'||!isPlural)
  const includeIdResponse = !isPlural
  const func = functionName(action,name)
  await writeGeneric(requests,`${func}: {${includeId?"id:string":""}}`, typePointer, "Request Types", `${func}:`)
  await writeGeneric(responses,`${name}: {${includeIdResponse?"id:string":""}}`, typePointer, "Response Types", `${name}:`)
}

export async function writeScreen(name:string, path:string) {
  await getScreenPath(name)
  await writeGeneric(routeUrls,`"${name}" = "${path}",`, routeUrlsPointer, "route urls")
  await writeGeneric(routes,`[RouteUrls.${name}]: {
    options: {
    },
    component: ${name},
  },`, routesScreensPointer, "screen string")
  await writeGeneric(routes,`import ${name} from "screens/${name}";
`, routesImportPointer, "route import")
  await writeGeneric(routes,`import ${name} from "screens/${name}";
`, routesImportPointer, "route import")
}


const apiName = function (url:string) {
  // eslint-disable-next-line no-template-curly-in-string
  const replace = '${query.id}';
  if (url.charAt(0) === '/') {
    return url.slice(1).replace(':id', replace);
  }
  // eslint-disable-next-line no-template-curly-in-string
  return url.replace(':id', replace);
};
export async function writeExport(name:string, functionName:string, queryFunctionName:string) {
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath, queryFunctionName+",", exportPointer, "Exports",queryFunctionName+",")
  await writeGeneric(hookPath, `export async function ${functionName}(store: any, data: Req['${functionName}'], options?: Parameters<typeof ${singular(name)}Service.endpoints.${functionName}.initiate>[1]) {
  store.dispatch(${singular(name)}Service.endpoints.${functionName}.initiate(data,options))
  return ${singular(name)}Service.util.getRunningOperationPromises();
}`,functionPointer,'Function export', `export async function ${functionName}(`)
}


export async function writeAction(action:string, name:string) {
  const path = await getSlicePath(action, name);
  await writeStoreSlice(name)
}

export async function getSlicePath(action:string, name:string) {
  const location = path.join(rootPath, `./common/hooks/use${capitalize(name)}.ts`);
  const func = `${action}${capitalize(name)}`
  if (fs.existsSync(location)){
    console.log("Slice already exists")
  } else {
    fs.writeFileSync(location, `import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Res } from '../types/responses'
import { Req } from '../types/requests'
import { StoreStateType } from '../store'

type InitialStateType = Res['${name}'] | null

const initialState = null as InitialStateType

export const ${name}Slice = createSlice({
  name: '${name}',
  initialState,
  reducers: {
    ${func}(state, action: PayloadAction<Req['${func}']>) {
      state = action.payload
      return state
    },
  },
})

export const ${name}Actions = ${name}Slice.actions
export const use${capitalize(name)}Actions = () => {
  const dispatch = useDispatch()
  const ${func} = useCallback(
    (payload: Req['${func}']) => {
      return dispatch(${name}Actions.${func}(payload))
    },
    [dispatch],
  )
  return { ${func} }
}

const select${capitalize(name)} = (state: StoreStateType) => state.${name}

export const use${capitalize(name)} = () => {
  const { ${func} } = use${capitalize(name)}Actions()
  const ${name} = useSelector(select${capitalize(name)})
  return useMemo(() => ({ ${func}, ${name} }), [${func}, ${name}])
}
`)
  }
  return location;
}

export async function getServicePath(name:string) {
  const location = path.join(rootPath, `./common/hooks/use${capitalize(singular(name))}.ts`);

  if (fs.existsSync(location)){
    console.log("Service already exists")
  } else {
    fs.writeFileSync(location, `import { createApi } from '@reduxjs/toolkit/query/react'
import { baseApiOptions } from '../utils/serviceUtils'
import { Res } from '../types/responses'
import { Req } from '../types/requests'

export const ${singular(name)}Service = createApi({
  ...baseApiOptions(),
  reducerPath: '${singular(name)}Service',
  tagTypes: ['${capitalize(singular(name))}'],
  endpoints: (builder) => ({

    // END OF ENDPOINTS
  }),
})

// END OF FUNCTION_EXPORTS

export const {
  // END OF EXPORTS
} = ${singular(name)}Service

// const { data, isLoading } = useGet${capitalize(name)}Query({ id: 2 }, {}) get hook
// const [create${capitalize(name)}, { isLoading, data, isSuccess }] = useCreate${capitalize(name)}Mutation() create hook
// ${singular(name)}Service.endpoints.get${capitalize(name)}.select({id: 2})(store.getState()) access data from any function
`)
  }
  return location;
}
export async function getScreenPath(name:string) {

  const location = path.join(mobileScreens, `${name}.tsx`);

  if (fs.existsSync(location)){
    console.log("Screen already exists")
  } else {
    fs.writeFileSync(location, `import Text from "components/base/type/Text";
import ScreenContainer from "components/ScreenContainer";
import React from "react";
import withScreen, { Screen } from "./withScreen";

type ${name} = Screen & {
}

const ${name}: React.FC<${name}> = ({ children }) => {
  return (
      <ScreenContainer style={Styles.body}>
        <Text>I am the ${name}</Text>
      </ScreenContainer>
  );
};

export default withScreen(${name});
`)
  }
  return location;
}

export async function writeStoreService(name:string) {
  await writeGeneric(store,`import { ${singular(name)}Service } from './hooks/use${capitalize(singular(name))}'`, importPointer, "Store import")
  await writeGeneric(store,`[${singular(name)}Service.reducerPath]: ${singular(name)}Service.reducer,`, reducerPointer, "Reducer import")
  await writeGeneric(store,` .concat(${singular(name)}Service.middleware)`, middlewarePointer, "Middleware import")
}
export async function writeStoreSlice(name:string) {
  await writeGeneric(store,`import { ${name}Slice } from './hooks/use${capitalize(name)}'`, importPointer, "Store import")
  await writeGeneric(store,`${name}: ${name}Slice.reducer,`, reducerPointer, "Reducer import")
}
export async function writeGetQuery(name:string, url:string, providesItem:boolean) {
  const func = functionName("get", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.query<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
      }),
      providesTags:(res)=>[${providesItem&&`{ type: '${singular(capitalize(name))}', id: res?.id },`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,"get"+ capitlizeFirst(name), "useGet"+ capitlizeFirst(name+"Query"))
  await writeStoreService(name)
}


export async function writeCollectionQuery(name:string, url:string, providesCollection:boolean) {
  const func = functionName("get", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.query<Res['${name}'], Req['${func}']>({
      query: () => ({
        url: \`${apiName(url)}\`,
      }),
      providesTags:[${providesCollection&&`{ type: '${capitalize(singular(name))}', id: 'LIST' },`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,"get"+ capitlizeFirst(name), "useGet"+ capitlizeFirst(name+"Query"))
  await writeStoreService(name)
}


export async function writeCreateQuery(name:string, url:string, invalidatesCollection:boolean) {
  const func = functionName("create", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'POST',
        body: query,
      }),
      invalidatesTags: [${invalidatesCollection&&`{ type: '${singular(capitalize(name))}', id: 'LIST' }`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,"create"+ capitlizeFirst(name), "useCreate"+ capitlizeFirst(name+"Mutation"))
  await writeStoreService(name)
}

export async function writeDeleteQuery(name:string, url:string, invalidatesCollection:boolean) {
  const func = functionName("delete", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'DELETE',
        body: query,
      }),
      invalidatesTags: [${invalidatesCollection&&`{ type: '${singular(capitalize(name))}', id: 'LIST' },`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,"delete"+ capitlizeFirst(name), "useDelete"+ capitlizeFirst(name+"Mutation"))
  await writeStoreService(name)
}

export async function writeUpdateQuery(name:string, url:string, invalidatesCollection:boolean, invalidatesItem:boolean) {
  const func = functionName("update", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'PUT',
        body: query,
      }),
      invalidatesTags:(res)=>[${invalidatesCollection&&`{ type: '${singular(capitalize(name))}', id: 'LIST' },`}${invalidatesItem&&`{ type: '${singular(capitalize(name))}', id: res?.id },`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,"update"+ capitlizeFirst(name), "useUpdate"+ capitlizeFirst(name+"Mutation"))
  await writeStoreService(name)
}

export async function writePatchQuery(name:string, url:string, invalidatesCollection:boolean, invalidatesItem:boolean) {
  const func = functionName("patch", name)
  const hookPath = await getServicePath(name)
  await writeGeneric(hookPath,`  ${func}: builder.mutation<Res['${name}'], Req['${func}']>({
      query: (query: Req['${func}']) => ({
        url: \`${apiName(url)}\`,
        method: 'PATCH',
        body: query,
      }),
      invalidatesTags:(res:Res['${name}'])=>[${invalidatesCollection&&`{ type: '${singular(capitalize(name))}', id: 'LIST' },`}${invalidatesItem&&`{ type: '${singular(capitalize(name))}', id: res.id },`}],
    }),`, servicePointer, "Query", `${func}:`)
  await writeExport(name,"update"+ capitlizeFirst(name), "useUpdate"+ capitlizeFirst(name+"Mutation"))
  await writeStoreService(name)
}

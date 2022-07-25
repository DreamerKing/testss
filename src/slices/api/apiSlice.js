import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: '/m1/1239079-0-default/',
  prepareHeaders: (headers, { getState }) => {
    console.log(headers, 'headers',
      getState());
    // headers.set('Content-Type', 'application/json')
    /*    const token = storage.getItem('authToken');
       if (token) {
         headers.set('authToken', token);
       } */
    return headers;
  }
});


const baseQueryWithIntercept = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log('拦截器:', result);
  const {
    data,
    data: { code } = {},
    error,
    meta: {
      request: { url },
      response: { status }
    }
  } = result;

  if (error) {
    checkStatus(status, code);
  }
  return result;
  /*  if (Object.is(data?.code, 7)) {
     return result;
   } else {
     return Promise.reject('错误信息');
   } */
}

export function checkStatus(status, code) {
  switch (status) {
    case 400:
      break;
    case 401:
      console.log('请先登录');
      window.location.href = '/login';
      break;
    case 403:
      console.log('登录过期');
      window.location.href = '/login';
      break;
    case 404:
      break;
    default:
      break;
  }
}


export const apiSlice = createApi({
  reducerPath: 'api',
  keepUnusedDataFor: 2, // 默认60秒
  refetchOnMountOrArgChange: 30 * 60,
  baseQuery: baseQueryWithIntercept,
  endpoints: () => ({})
});



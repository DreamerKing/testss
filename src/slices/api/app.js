import { apiSlice } from './apiSlice';

const appApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 获取所有应用
    getAllAppList: builder.query({
      query: () => ({
        url: '/api/v1/app/getAllAppInfo',
        method: 'POST',
      }),
    }),
    // 新增应用
    addApp: builder.mutation({
      query: (appInfo) => ({
        url: '/api/v1/app/addAppInfo',
        method: 'POST',
        body: { ...appInfo }
      }),
    }),
    // 修改应用
    updateApp: builder.mutation({
      query: (appInfo) => ({
        url: '/api/v1/app/updateAppInfo',
        method: 'POST',
        body: { ...appInfo }
      }),
    }),
  })
});

export default appApi;


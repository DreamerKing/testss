import { apiSlice } from './apiSlice';


const permissonApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 应用下的所有菜单
    getAppMenuTree: builder.query({
      query: ({ appId }) => ({
        url: '/api/v1/permisson/listPermissonVO',
        method: 'POST',
        body: { appId }
      }),
    })
  })
});

export default permissonApi;
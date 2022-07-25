import { apiSlice } from './apiSlice';
import { createSlice } from '@reduxjs/toolkit';


export const roleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRoleList: builder.query({
      query: ({ appId, currentPage, pageSize, roleCode, roleName, status }) => ({
        url: '/listRoleByCondition',
        method: 'POST',
        body: JSON.stringify({ appId, currentPage, pageSize, roleCode, roleName, status })
      }),
    }),
    deleteRole: builder.mutation({
      query: (roleId) => ({
        url: '/deleteRole',
        method: 'POST',
        body: { roleId }
      }),
    })
  })
});

export const { useGetRoleListQuery, useDeleteRoleMutation } = roleApi;

const roleSlice = createSlice({
  name: 'role',
  initialState: {},
  reducers: {
    test(state) {
      return state;
    }
  }
});

export default roleSlice.reducer


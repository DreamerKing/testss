import { apiSlice } from './apiSlice';
import { createSlice } from '@reduxjs/toolkit';


export const roleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 分页查询角色
    getRoleList: builder.query({
      query: ({ appId, currentPage, pageSize, roleCode, roleName, status }) => ({
        url: '/listRoleByCondition',
        method: 'POST',
        body: { appId, currentPage, pageSize, roleCode, roleName, status }
      }),
    }),
    // 查询部门下的角色
    getDeptRoleList: builder.query({
      query: ({ deptCode }) => ({
        url: '/listRoleByCondition',
        method: 'POST',
        body: JSON.stringify({ deptCode })
      }),
    }),
    // 新增或编辑用户角色
    addOrEditRole: builder.mutation({
      query: ({ id, roleId, userId }) => ({
        url: '/role/insertOrUpdateRole',
        method: 'POST',
        body: { id, roleId, userId }
      }),
    }),
    // 取消授权用户角色
    cancelGrantRole: builder.mutation({
      query: ({ id, roleId, userId }) => ({
        url: '/role/disEnableUserRole',
        method: 'POST',
        body: { id, roleId, userId }
      }),
    }),
    // 授权用户角色
    grantRole: builder.mutation({
      query: ({ id, roleId, userId }) => ({
        url: '/role/disEnableUserRole',
        method: 'POST',
        body: { id, roleId, userId }
      }),
    }),
    // 删除角色
    deleteRole: builder.mutation({
      query: ({ roleId }) => ({
        url: '/deleteRole',
        method: 'POST',
        body: { roleId }
      }),
    }),
    // 启用停用角色
    shutDownOrEnableRole: builder.mutation({
      query: ({ roleId, status }) => ({
        url: '/shutDownOrEnableRole',
        method: 'POST',
        body: { roleId, status }
      }),
    })
  })
});


export const roleSlice = createSlice({
  name: 'role',
  initialState: {
    currentAppId: '',
  },
  reducers: {
    selectAppId(state, { payload: appId }) {
      return { ...state, currentAppId: appId };
    }
  }
});

export const { selectAppId } = roleSlice.actions;

export default roleSlice.reducer;
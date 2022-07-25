import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from './apiSlice';

export default apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({
        clientId,
        loginName,
        passwd,
        verifyCode
      }) => ({
        url: '/api/v2/operation/login',
        method: 'POST',
        body: {
          clientId,
          loginName,
          passwd,
          verifyCode
        }
      }),
    }),

    refreshToken: builder.mutation({
      query: ({ accessToken, refreshToken }) => ({
        url: '/api/v1/refreshUserToken',
        method: 'POST',
        body: { accessToken, refreshToken }
      })
    }),
    sendSMS: builder.mutation({
      query: ({ mobilePhone, verifyCode }) => ({
        url: '/api/v1/login/sendSMS',
        method: 'POST',
        body: { mobilePhone, verifyCode }
      })
    })
  })
});


export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
  },
  reducers: {
    login: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});


export const { login } = userSlice.actions;

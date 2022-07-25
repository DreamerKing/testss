import { apiSlice } from './apiSlice';

export default apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPolicyList: builder.query({
      query: () => ({
        url: 'policyType/listAllPolicyType',
        method: 'POST'
      }),
    }),
    deletePolicyCategory: builder.query({
      query: (policytypeId) => ({
        url: 'policyType/deletePolicyType',
        method: 'POST',
        body: { policytypeId }
      })
    }),
    addPolicyCategory: builder.mutation({
      query: ({ policytypeName, sort }) => ({
        url: 'policyType/insertOrUpdatePolicyType',
        method: 'POST',
        body: { policytypeId, policytypeName, sort }
      })
    }),
    updatePolicyCategory: builder.mutation({
      query: ({ policytypeId, policytypeName, sort }) => ({
        url: 'policyType/insertOrUpdatePolicyType',
        method: 'POST',
        body: { policytypeId, policytypeName, sort }
      })
    }),
    switchPolicyCategoryStatus: builder.mutation({
      query: ({ policytypeId, status }) => ({
        url: 'policyType/shutDownOrEnablePolicyType',
        method: 'POST',
        body: { policytypeId, status }
      })
    })
  })
});
import React from 'react';

// 发布时，需验证登录
export default ({ children }) => {
  // 本地测试，跳过登录
  const __DEV__ = process.env.NODE_ENV === 'development'
  if (__DEV__) {
    const accountInfo = { "userId": 627, "userName": "陈来君-test", "token": "577ae5d5-3790-4bd9-bcf4-be5011872f20", "mainUser": 1 }
    sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo));
  }
  return (
    <>
      <div>{children}</div>
    </>
  )
}

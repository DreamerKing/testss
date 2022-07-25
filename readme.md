# 统一用户权限管理中心

## 项目概况

项目采用 cbd 搭建,使用最新的 react、react-router、redux 来开发,接口调用使用 RTK-Query,自动生成 hooks 进行调用。
界面基于 antd 进行开发。

## 开发与调试

```sh
yarn start  //  开发
yarn build:prod // 打包

```

## 项目配置

配置文件`env/config.js`

- env 项目当前的运行环境，如：'development'
- theme antd 的皮肤配置信息
- proxy 项目本地代理配置，详情同 webpack-dev-server 的配置
- vendors 一个数组，可以定义哪些包打到 vendors 文件里。默认值：`['react', 'react-dom', 'moment', 'lodash', 'antd', 'antd/dist/antd.less', 'axios']`
- 其他可以自定义配置

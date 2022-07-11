import React, { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import _ from 'lodash'
// 国际化
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.less';
import './framework.styl';
import noData from '@/assets/noData.svg'
import Header from './header'
import Footer from './footer'
import SideBar from './side-bar';
import Crumbs from './crumbs';
import { headTitle } from '@/env/default';
import PageRoutes from '@/routes/routes'
import { getRouteList } from '@/utils/utils'


// 表格空状态的提示

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <img src={noData} style={{ maxWidth: '100%' }} />
    <p>暂无内容</p>
  </div>
);

const getMenuList = (list = []) => {
  let _list = list.filter(item => item.isMenu)
  _list.map(item => {
    let children = item.children && getMenuList(item.children)
    item.children = children
  })
  return _list
}

const Framework = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const routeList = getRouteList(PageRoutes)
  const curRoute = routeList.filter(item => item.path === location.pathname)
  const [curKey, setCurKey] = useState(curRoute[0]?.key || '')
  return (
    <ConfigProvider
      locale={zhCN}
      renderEmpty={customizeRenderEmpty}
    >
      <div className="framework">
        <Header
          title={headTitle}
          curKey={curKey}
          menuList={[
            {
              name: '工作台',
              key: 'a'
            },
            {
              name: '数据管理',
              key: 'a2'
            }
          ]}
          extral={<div style={{ color: '#fff' }}>退出</div>}
        />
        <div className='framework-section'>
          <SideBar
            curKey={curKey}
            menuList={getMenuList(_.cloneDeep(PageRoutes))}
            menuClickCallback={(key, path) => {
              navigate(path)
            }}
          />
          <div className='framework-section-right'>
            <Crumbs />
            <div className='framework-section-content'>{props.children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Framework

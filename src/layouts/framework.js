import React from 'react';
import { Outlet } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.less';
import './framework.styl';
import Header from './header'
import Footer from './footer';
import SideMenu from './side-menu';
import BreadNav from './bread-nav';
import { headTitle } from '@/env/default';
import customizeRenderEmpty from './empty';


const Framework = (props) => {
  return (
    <ConfigProvider
      locale={zhCN}
      renderEmpty={customizeRenderEmpty}
    >
      <div className="framework">
        <Header
          title={headTitle}
          extral={<div style={{ color: '#fff' }}>退出</div>}
        />
        <div className='framework-section'>
          <SideMenu />
          <div className='framework-section-right'>
            <BreadNav />
            <div className='framework-section-content'>
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Framework

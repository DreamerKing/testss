import React, { Component } from 'react';
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

class Framework extends Component {
  render() {
    return (
      <ConfigProvider
        locale={zhCN}
        renderEmpty={customizeRenderEmpty}
      >
        <div className="framework">
          <Header title={headTitle} />
          <div className='framework-section'>
            <SideBar
              curKey="a3"
              menuList={getMenuList(PageRoutes)}
              menuClickCallback={() => {

              }}
            />
            <div className='framework-section-right'>
              <Crumbs />
              <div className='framework-section-content'>{this.props.children}</div>
              <Footer />
            </div>
          </div>
        </div>
      </ConfigProvider>
    )
  }
}

export default Framework

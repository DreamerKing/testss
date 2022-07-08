import React, { Component } from 'react';
// 国际化
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.less';
import './framework.styl';
import noData from '@/assets/noData.svg'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SideBar from '@/components/side-bar';
import Crumbs from '@/components/crumbs';
import { headTitle } from '@/env/default';

// 表格空状态的提示

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <img src={noData} style={{ maxWidth: '100%' }} />
    <p>暂无内容</p>
  </div>
);

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
            <SideBar />
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

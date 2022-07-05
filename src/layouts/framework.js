import React, { Component } from 'react';
// 国际化
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.less';
import './framework.styl';
import noData from '@/assets/noData.svg'

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
          <>{this.props.children}</>
        </div>
      </ConfigProvider>
    )
  }
}

export default Framework

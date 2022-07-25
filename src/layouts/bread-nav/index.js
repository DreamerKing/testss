import { Breadcrumb } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import menus from '@/consts/menus';
import getBread from '@/utils/getbread';
import { RightOutlined } from '@ant-design/icons';
import './index.styl';

export default function BreadNav(options) {
  const keyPath = useSelector(state => state.system.keyPath);
  const breads = getBread(keyPath, menus);


  return (
    <Breadcrumb className='bread-nav' separator={<RightOutlined />} >
      {breads.map(bread => (
        <Breadcrumb.Item key={bread.key} className='bread-nav-item'>
          {bread.label}
        </Breadcrumb.Item>
      )
      )}
    </Breadcrumb>
  )
}
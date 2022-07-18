import { Space, Table, Form, Row, Col, Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import DepartmentForm from '../department-form';
import '@/pages/common/style/manage.styl';

const { Item: FItem } = Form;
const { Option: SOption } = Select;


const initialData = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { span: 16, offset: 8 },
}

export default function DepartmentManage() {
  const [data, setData] = useState(initialData);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const columns = [
    {
      title: '部门名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '部门编码',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '是否行政规划',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '区域类型',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '是否政策牵头部门',
      key: 'tags',
      dataIndex: 'tags',
    }, {
      title: '排序',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '更新人',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '更新时间',
      key: 'updatedAt',
      dataIndex: 'tags',
    }, {
      title: '状态',
      key: 'updatedAt',
      dataIndex: 'tags',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => navigate('./edit')}>编辑</a>
          <a>停用</a>
          <a>添加子部门</a>
        </Space>
      ),
    },
  ];

  const handleAdd = () => {
    setVisible(true);
  };
  return (
    <div className="manage">
      <div className="search-container">
        <Form className="form-search-area" {...layout}>
          <FItem label="部门名称" name="name" >
            <Input />
          </FItem>
          <FItem label="是否行政区划" name="we" >
            <Select placeholder="请选择">
              <SOption value="1">全部</SOption>
              <SOption value="2">是</SOption>
              <SOption value="3">否</SOption>
            </Select>
          </FItem>
          <FItem label="区划" name="s" >
            <Select placeholder="请选择">
              <SOption value="1">市</SOption>
              <SOption value="2">区县</SOption>
              <SOption value="3">镇街</SOption>
              <SOption value="4">管委会</SOption>
              <SOption value="5">社区</SOption>
            </Select>
          </FItem>
          <FItem label="是否牵头部门" name="s" >
            <Select placeholder="请选择">
              <SOption value="1">全部</SOption>
              <SOption value="2">是</SOption>
              <SOption value="3">否</SOption>
            </Select>
          </FItem>
          <FItem label="状态" name="d" >
            <Select placeholder="请选择">
              <SOption value="1">全部</SOption>
              <SOption value="2">启用</SOption>
              <SOption value="3">停用</SOption>
            </Select>
          </FItem>
          <div className='search-options'>
            <Button type="primary" style={{ marginRight: '8px' }}>查询</Button>
            <Button type="reset">重置</Button>
          </div>
        </Form>
      </div>
      <div className="options-container">
        <Button type="primary"
          onClick={handleAdd}>新增部门</Button>
      </div>
      <div className="table-container">
        <Table columns={columns} dataSource={data} />
      </div>
      <DepartmentForm visible={visible} setVisible={setVisible} />
    </div>
  )
}
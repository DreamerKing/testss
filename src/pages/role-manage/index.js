import { Space, Table, Form, Row, Col, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '@/pages/common/style/manage.styl';

const { Item: FItem } = Form;

const initialData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { span: 16, offset: 8 },
}

export default function RoleManage() {
  const [data, setData] = useState(initialData);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const columns = [
    {
      title: '所属应用',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '角色名称',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '角色编码',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '说明',
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
          <a>授权用户</a>
          <a>停用</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const handleAddUser = () => {
    setVisible(true);
  };

  return (
    <div className="manage">
      <div className="search-container">
        <Form {...layout}>
          <Row gutter={8}>
            <Col span={8}>
              <FItem label="所属应用" name="" >
                <Input />
              </FItem>
            </Col>
            <Col span={8}>
              <FItem label="角色名称" name="" >
                <Input />
              </FItem>
            </Col>
            <Col span={8}>
              <FItem label="角色编码" name="" >
                <Input />
              </FItem>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={8}>
              <FItem label="状态" name="" >
                <Input />
              </FItem>
            </Col>
            <Col span={8} offset={8}>
              <FItem className='search-options' {...tailLayout} style={{ textAlign: 'right' }}>
                <Button type="primary" style={{ marginRight: '8px' }}>查询</Button>
                <Button type="reset">重置</Button>
              </FItem>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="options-container">
        <Button type="primary"
          onClick={handleAddUser}>新增角色</Button>
      </div>
      <div className="table-container">
        <Table columns={columns} dataSource={data} />
      </div>
    </div >
  )
}

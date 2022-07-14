import { Space, Table, Form, Row, Col, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import AddUser from './add-user';
import '../common/style/manage.styl';

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

const UserManage = () => {
  const [data, setData] = useState(initialData);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const columns = [
    {
      title: '用户ID',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '账号',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '姓名',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '手机号',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '更新时间',
      key: 'updatedAt',
      dataIndex: 'tags',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>详情</a>
          <a onClick={() => navigate('./edit')}>编辑</a>
        </Space>
      ),
    },
  ];

  const handleAddUser = () => {
    setVisible(true);
  };

  return (
    <div className="user-manage">
      <div className="search-container">
        <Form {...layout}>
          <Row gutter={8}>
            <Col span={8}>
              <FItem label="用户ID" name="" >
                <Input />
              </FItem>
            </Col>
            <Col span={8}>
              <FItem label="账号" name="" >
                <Input />
              </FItem>
            </Col>
            <Col span={8}>
              <FItem label="姓名" name="" >
                <Input />
              </FItem>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={8}>
              <FItem label="手机号" name="" >
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
          onClick={handleAddUser}>新增用户</Button>
      </div>
      <div className="table-container">
        <Table columns={columns} dataSource={data} />
      </div>
      <AddUser visible={visible} setVisible={setVisible} />
    </div >
  )
}

export default UserManage;
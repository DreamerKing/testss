import { Space, Table, Form, Row, Col, Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import DepartmentForm from './department-form';
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
      title: '????????????',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '????????????',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '??????????????????',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '????????????',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '????????????????????????',
      key: 'tags',
      dataIndex: 'tags',
    }, {
      title: '??????',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '?????????',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '????????????',
      key: 'updatedAt',
      dataIndex: 'tags',
    }, {
      title: '??????',
      key: 'updatedAt',
      dataIndex: 'tags',
    },
    {
      title: '??????',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => navigate('./edit')}>??????</a>
          <a>??????</a>
          <a>???????????????</a>
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
          <FItem label="????????????" name="name" >
            <Input />
          </FItem>
          <FItem label="??????????????????" name="we" >
            <Select placeholder="?????????">
              <SOption value="1">??????</SOption>
              <SOption value="2">???</SOption>
              <SOption value="3">???</SOption>
            </Select>
          </FItem>
          <FItem label="??????" name="s" >
            <Select placeholder="?????????">
              <SOption value="1">???</SOption>
              <SOption value="2">??????</SOption>
              <SOption value="3">??????</SOption>
              <SOption value="4">?????????</SOption>
              <SOption value="5">??????</SOption>
            </Select>
          </FItem>
          <FItem label="??????????????????" name="s" >
            <Select placeholder="?????????">
              <SOption value="1">??????</SOption>
              <SOption value="2">???</SOption>
              <SOption value="3">???</SOption>
            </Select>
          </FItem>
          <FItem label="??????" name="d" >
            <Select placeholder="?????????">
              <SOption value="1">??????</SOption>
              <SOption value="2">??????</SOption>
              <SOption value="3">??????</SOption>
            </Select>
          </FItem>
          <div className='search-options'>
            <Button type="primary" style={{ marginRight: '8px' }}>??????</Button>
            <Button type="reset">??????</Button>
          </div>
        </Form>
      </div>
      <div className="options-container">
        <Button type="primary"
          onClick={handleAdd}>????????????</Button>
      </div>
      <div className="table-container">
        <Table columns={columns} dataSource={data} />
      </div>
      <DepartmentForm visible={visible} setVisible={setVisible} />
    </div>
  )
}
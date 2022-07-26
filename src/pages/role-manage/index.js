import { Space, Table, Form, Row, Col, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { roleApi } from '@/slices/api/role';

import '@/pages/common/style/manage.styl';

const { Item: FItem } = Form;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { span: 16, offset: 8 },
}

export default function RoleManage() {
  const [form] = Form.useForm();

  const [query, setQuery] = useState({ pageSize: 2 });

  const { data: { data: { values = [] } = {}, totalCount: total = 0 } = {}, refetch } = roleApi.useGetRoleListQuery(query);
  const onFinish = (values) => {
    setQuery({ ...values });
  };

  const [deleteRole] = roleApi.useDeleteRoleMutation();

  // 翻页
  const handlePageChange = (currentPage, pageSize) => {
    setQuery({ ...values, currentPage, pageSize });
  };

  // 重置
  const onReset = () => {
    form.resetFields();
    setQuery({})
  };

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const columns = [
    {
      title: '所属应用',
      dataIndex: 'appId',
      key: 'appId',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName',
    },
    {
      title: '角色编码',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '说明',
      key: 'remark',
      dataIndex: 'remark',
    },
    {
      title: '更新时间',
      key: 'updatedAt',
      dataIndex: 'tags',
    }, {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => navigate('./edit')}>编辑</a>
          <a>授权用户</a>
          <a>停用</a>
          <a onClick={() => {
            deleteRole({ roleId: record.id });
            refetch();
          }
          }>删除</a>
        </Space>
      ),
    },
  ];

  const handleAddOrEditRole = () => {
    navigate('add');
  };

  return (
    <div className="manage">
      <div className="search-container">
        <Form {...layout} form={form} name="role-search" onFinish={onFinish} >
          <Row gutter={8}>
            <Col span={8}>
              <FItem label="所属应用" name="appId" >
                <Input allowClear />
              </FItem>
            </Col>
            <Col span={8}>
              <FItem label="角色名称" name="roleName" >
                <Input allowClear />
              </FItem>
            </Col>
            <Col span={8}>
              <FItem label="角色编码" name="roleCode" >
                <Input allowClear />
              </FItem>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={8}>
              <FItem label="状态" name="status" >
                <Input allowClear />
              </FItem>
            </Col>
            <Col span={8} offset={8}>
              <FItem className='search-options' {...tailLayout} style={{ textAlign: 'right' }}>
                <Button type="primary" style={{ marginRight: '8px' }} htmlType="submit">查询</Button>
                <Button type="reset" onClick={onReset}>重置</Button>
              </FItem>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="options-container">
        <Button type="primary"
          onClick={handleAddOrEditRole}>新增角色</Button>
      </div>
      <div className="table-container">
        <Table columns={columns} dataSource={values} pagination={{
          current: query.currentPage ?? 1,
          total,
          pageSize: query.pageSize,
          onChange: handlePageChange
        }} rowKey="id" />
      </div>
    </div >
  )
}

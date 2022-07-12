import { Form, Space, Input, Row, Col, Button, Tabs, List, Table } from 'antd';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './edit-user.styl';


const { Item: FItem } = Form;
const { TabPane } = Tabs;
const { Item: LItem } = List;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
};

const UserInfo = () => {
  return (
    <div className="user-info">
      <div>自建账户信息</div>
      <Form {...layout}>
        <Row gutter={8}>
          <Col span={12}>
            <FItem label="姓名" name="name" >
              <Input />
            </FItem>
          </Col>
          <Col span={12}>
            <FItem label="手机号" name="mobile" >
              <Input />
            </FItem>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <FItem label="账户" name="account" >
              <Input />
            </FItem>
          </Col>
          <Col span={12}>
            <FItem label="密码" name="pwd" >
              <Space>
                <Input.Password />
                <Button>重置密码</Button>
              </Space>
            </FItem>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

const PermissionInfo = () => {
  const [endList, setEndList] = useState([{ name: '政策直达(运营端)', key: '1' }, { name: '政策直达(企业端)', key: '2' }, { name: '政策直达(个人端)', key: '3' }])
  const [activePermissionTab, setActivPermissionTab] = useState('build-self-user');
  const handleChangePermissionTag = (key) => {
    setActivPermissionTab(key);
  };

  const [data, setData] = useState([]);
  const columns = [
    {
      title: '角色名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '角色编码',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '更新时间',
      dataIndex: 'address',
      key: 'address',
    }];

  return (
    <div className="permission-info">
      <Tabs defaultActiveKey='build-self-user' type="card" activeKey={activePermissionTab} onChange={handleChangePermissionTag}>
        <TabPane tab={'自建用户体系'} key="build-self-user"></TabPane>
        <TabPane tab={'政府第三方应用体系'} key="police-third-user"></TabPane>
      </Tabs>
      <div>
        <div>角色授权</div>
        <div>
          <div>
            <Space>
              <Input prefix={<SearchOutlined />} placeholder="请输入" />
            </Space>
            <ul className="end-list">
              {endList.map(l => {
                return (
                  <li key={l.key}>{l.name}</li>
                )
              })}
            </ul>
          </div>
          <div>
            <div>
              <Space><div>角色列表</div></Space>
            </div>
            <div>
              <Space>角色列表</Space>
              <Space><Input placeholder="请输入角色名"></Input></Space>
              <Space><Button type='primary'>查询</Button></Space>
            </div>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

const EditUser = () => {
  const [activeTab, setActiveTab] = useState('user-manage')
  const handleChangeTag = (key) => {
    setActiveTab(key)
  }

  return (
    <div className="edit-user">
      <div className="title">编辑用户信息</div>
      <section className="user-base-info">
        <div className='user-base-info-1'>
          <div className='large-text'>姓名: 张萌萌</div>
          <div><Button type="default">返回</Button></div>
        </div>
        <div className='user-base-info-2'>
          <div>手机号:</div>
          <div>最后登录时间:</div>
          <div>用户ID:</div>
        </div>
      </section>
      <Tabs defaultActiveKey='user-manage' activeKey={activeTab} onChange={handleChangeTag}>
        <TabPane tab={'用户管理'} key="user-manage"></TabPane>
        <TabPane tab={'权限信息'} key="permission-info"></TabPane>
        <TabPane tab={'应用授权'} key="application-grant"></TabPane>
      </Tabs>
      {activeTab == 'user-manage' && <UserInfo />}
      {activeTab == 'permission-info' && <PermissionInfo />}
    </div>
  )
}

export default EditUser;
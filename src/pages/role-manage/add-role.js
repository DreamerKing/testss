import { Form, Space, Input, Row, Col, Button, Select, Tabs, Table, Tree, Radio } from 'antd';
import { useState, createRef, forwardRef } from 'react';
import appApi from '@/slices/api/app';
import permissonApi from '@/slices/api/permisssion';
import { selectAppId } from '@/slices/api/role';
import { useDispatch, useSelector } from 'react-redux';
import './add-role.styl';


const { Item: FItem } = Form;
const { TabPane } = Tabs;
const { Option: SOption } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
};

const RoleInfoRef = createRef();
const PermissionInfoRef = createRef();

const RoleInfo = forwardRef((props, ref) => {
  const { data: { data: appList = [] } = {} } = appApi.useGetAllAppListQuery();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleSelectApp = (appId) => {
    dispatch(selectAppId(appId));
  }
  return (
    <div className="user-info">
      <div>角色信息</div>
      <Form {...layout} ref={ref} form={form} >
        <Row gutter={8}>
          <Col span={12}>
            <FItem label="所属应用" name="name" >
              <Select onSelect={handleSelectApp}>
                {appList.map((app) => {
                  return (
                    <SOption value={app.appId} key={app.appId}>{app.appName}</SOption>
                  )
                })
                }
              </Select>
            </FItem>
          </Col>
          <Col span={12}>
            <FItem label="角色名称" name="mobile" >
              <Input />
            </FItem>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <FItem label="角色说明" name="account" >
              <Input />
            </FItem>
          </Col>
          <Col span={12}>
            <FItem label="是否为管理员" name="pwd" >
              <Radio.Group>
                <Radio value={1}>是</Radio>
                <Radio value={2}>否</Radio>
              </Radio.Group>
            </FItem>
          </Col>
        </Row>
      </Form>
    </div>
  )
});

const PermissionInfo = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('button')
  const handleChangeTag = (key) => {
    setActiveTab(key)
  }

  const appId = useSelector(state => state.role.currentAppId);

  const { data: { data: treeData = [] } = {} } = permissonApi.useGetAppMenuTreeQuery({ appId });
  const onCheck = (selectedKeys, info) => {
    console.log(selectedKeys, info, 'selectedKeys');
  }

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
      <div className='permission-info-body'>
        <div className='permission-info-title'>授权</div>
        <div className='permission-info-role' >
          <div className='permission-info-role-left'>
            <Tree ref={ref} checkable
              fieldNames={
                {
                  key: 'id',
                  title: 'showName',
                  children: 'childPermissons'
                }
              }
              onCheck={onCheck}
              treeData={treeData} />
          </div>
          <div className='permission-info-role-right'>
            <div className="permission-info-title-2">
              <Space><div>角色列表</div></Space>
            </div>
            <Tabs defaultActiveKey='button' activeKey={activeTab} onChange={handleChangeTag}>
              <TabPane tab={'按钮'} key="button"></TabPane>
            </Tabs>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </div>
  )
})

export default function AddRole() {

  const handleSave = async () => {
    const values = await RoleInfoRef.current.validateFields();
    const checkedKeys = PermissionInfoRef.current.state.checkedKeys
    console.log(checkedKeys, 'AddRole', values)
  }

  return (
    <div className="edit-user">
      <div className="title">新增角色</div>
      <RoleInfo ref={RoleInfoRef} />
      <PermissionInfo ref={PermissionInfoRef} />
      <div className="btn-group"><Button>取消</Button> <Button type="primary" className='save-btn' onClick={handleSave}>保存</Button></div>
    </div>
  )
}

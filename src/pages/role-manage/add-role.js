import { Form, Space, Input, Row, Col, Button, Tabs, Table, Tree, Radio } from 'antd';
import { useState } from 'react';
import './add-role.styl';


const { Item: FItem } = Form;
const { TabPane } = Tabs;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
};

const initTreeData = [
  {
    title: 'Expand to load',
    key: '0',
  },
  {
    title: 'Expand to load',
    key: '1',
  },
  {
    title: 'Tree Node',
    key: '2',
    isLeaf: true,
  },
];

const updateTreeData = (list, key, children) =>
  list.map((node) => {
    if (node.key === key) {
      return { ...node, children };
    }

    if (node.children) {
      return { ...node, children: updateTreeData(node.children, key, children) };
    }

    return node;
  });

const RoleInfo = () => {
  return (
    <div className="user-info">
      <div>角色信息</div>
      <Form {...layout}>
        <Row gutter={8}>
          <Col span={12}>
            <FItem label="所属应用" name="name" >
              <Input />
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
}

const PermissionInfo = () => {
  const [activeTab, setActiveTab] = useState('button')
  const handleChangeTag = (key) => {
    setActiveTab(key)
  }

  const [data, setData] = useState([]);
  const [treeData, setTreeData] = useState(initTreeData);
  const onLoadData = ({ key, children }) =>
    new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(() => {
        setTreeData((origin) =>
          updateTreeData(origin, key, [
            {
              title: 'Child Node',
              key: `${key}-0`,
            },
            {
              title: 'Child Node',
              key: `${key}-1`,
            },
          ]),
        );
        resolve();
      }, 1000);
    });

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
            <Tree checkable loadData={onLoadData} treeData={treeData} />
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
}

export default function AddRole() {
  return (
    <div className="edit-user">
      <div className="title">新增角色</div>
      <RoleInfo />
      <PermissionInfo />
    </div>
  )
}

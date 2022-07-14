import { Form, Space, Input, Row, Col, Button, Select, Tabs, Table, Tree, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './index.styl';


const { Item: FItem } = Form;
const { TabPane } = Tabs;
const { Option } = Select;

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

const ResouceRegisterInfo = () => {
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
    <div className='resource-register-body'>
      <div className='resource-register-left'>
        <Space>
          <Input prefix={<SearchOutlined />} placeholder="请输入" />
        </Space>
        <Tree className="rescource-tree" loadData={onLoadData} treeData={treeData} />
      </div>
      <div className='resource-register-right'>
        <div className="resource-register-title">
          <Space>资源注册</Space>
        </div>
        <div className="card-panel-flex">
          <div className="card-panel-item-2">
            <label>父级节点</label>
            <span>政策直达（政府端）</span>
          </div>
          <div className="card-panel-item-2">
            <label>资源编码</label>
            <span>政策直达（政府端）</span>
          </div>
          <div className="card-panel-item-2">
            <label>父级节点</label>
            <span>政策直达（政府端）</span>
          </div>
          <div className="card-panel-item-2">
            <label>父级节点</label>
            <span>政策直达（政府端）</span>
          </div>
          <div className="card-panel-item-2">
            <label>父级节点</label>
            <span>政策直达（政府端）</span>
          </div>
        </div>
        <div className="card-panel">
          <Space className="card-panel-title">页面元素</Space>
          <Tabs defaultActiveKey='button' activeKey={activeTab} onChange={handleChangeTag}>
            <TabPane tab={'按钮'} key="button"></TabPane>
            <TabPane tab={'数据字段'} key="data-filed"></TabPane>
          </Tabs>
          <div className='wrapper-table-top-options'>
            <Button type="primary">新增</Button>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  )
}

export default function RegisterResouce() {
  const applicationList = [{ name: '政策直达(运营端)', key: '1' }, { name: '政策直达(企业端)', key: '2' }, { name: '政策直达(个人端)', key: '3' }];
  const [currentAppliction, setApplication] = useState('1');
  const handleSelectChange = (key) => {
    setApplication(key);
  }
  return (
    <div className="resource-register">
      <div className="application-switch">
        <label>切换应用</label>
        <Select defaultValue={currentAppliction} style={{ width: 120 }} onChange={handleSelectChange}>
          {applicationList.map((application) => {
            return <Option value={application.key} key={application.key}>{application.name}</Option>
          })}
        </Select>
      </div>
      <ResouceRegisterInfo />
    </div>
  )
}

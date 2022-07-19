import { Modal, Form, Input, Checkbox, Button, Select, Space } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import "./department-form.styl";

const { Item: FItem } = Form;
const { Option: SOption } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { span: 16, offset: 8 },
}

export default function DepartmentForm(props) {
  const onFinish = () => { };
  const onFinishFailed = () => { };
  const handleClose = () => {
    props.setVisible(false);
  };
  return (
    <Modal footer={null} visible={props.visible} closable={false}>
      <div className="modal-title">
        <span>新增部门</span>
        <Space onClick={handleClose}><CloseOutlined />
        </Space>
      </div>
      <Form name="department"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="false"
        {...layout}
      >
        <FItem
          label="部门名称"
          name="username"
          rules={[{ required: true, message: '请输入部门名称' }]}
        >
          <Input placeholder='请输入部门名称' />
        </FItem>

        <FItem
          label="部门编码"
          name="mobilephone"
          rules={[{ required: true, message: '请输入部门编码' }]}
        >
          <Input placeholder='请输入部门编码' />
        </FItem>
        <FItem
          name="account"
          label="上级部门"
        >
          <Input placeholder='若非子部门,无需选择' />
        </FItem>
        <FItem label="行政区划">
          <FItem
            name="account2"
          >
            <Checkbox>是</Checkbox>
          </FItem>
          <span className="tips">选择之后不可变更，请谨慎选择。</span>
        </FItem>
        <FItem
          label="区划类型"
          name="type"
          rules={[{ required: true, message: '请选择区划类型' }]}
        >
          <Select placeholder="请选择区划类型">
            <SOption value="1">市</SOption>
            <SOption value="2">区县</SOption>
            <SOption value="3">镇街</SOption>
            <SOption value="4">管委会</SOption>
            <SOption value="5">社区</SOption>
          </Select>
        </FItem>
        <FItem label="政策牵头部门">
          <FItem
            name="account"
          >
            <Checkbox>是</Checkbox>
          </FItem>
          <span className="tips">选择之后不可变更，请谨慎选择。</span>
        </FItem>
        <FItem
          label="排序"
          name="sort"
          rules={[{ required: false }]}
        >
          <Input placeholder='若未输入，添加后将自行生成顺序号' />
        </FItem>
        <FItem {...tailLayout}>
          <Button type="primary" htmlType="submit" style={{ marginRight: '16px' }}>
            确定
          </Button>
          <Button type="default" onClick={handleClose}>
            取消
          </Button>
        </FItem>
      </Form>
    </Modal >
  )
}

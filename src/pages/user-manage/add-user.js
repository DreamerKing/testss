import { Modal, Form, Input, Row, Col, Button, Space } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import "./add-user.styl";

const { Item: FItem } = Form;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { span: 16, offset: 8 },
}

const AddUser = (props) => {
  const onFinish = () => { };
  const onFinishFailed = () => { };
  const handleClose = () => {
    props.setVisible(false);
  };
  return (
    <Modal footer={null} visible={props.visible} closable={false}>
      <div className="modal-title">
        <span>新增用戶</span>
        <Space onClick={handleClose}><CloseOutlined />
        </Space>
      </div>
      <Form name="addUser"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="false"
        {...layout}
      >
        <FItem
          label="姓名"
          name="username"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder='请输入' />
        </FItem>

        <FItem
          label="手机号"
          name="mobilephone"
          rules={[{ required: true, message: '请输入手机号' }]}
        >
          <Input placeholder='请输入' />
        </FItem>
        <FItem
          name="account"
          label="账号"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input placeholder='请输入' />
        </FItem>
        <FItem
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder='初始密码和账户相同' />
        </FItem>
        <FItem
          label="邮箱"
          name="email"
          rules={[{ required: false, message: '请输入邮箱' }]}
        >
          <Input placeholder='请输入' />
        </FItem>
        <FItem {...tailLayout}>
          <Button type="primary" htmlType="submit" style={{ marginRight: '16px' }}>
            立即创建
          </Button>
          <Button type="default" onClick={handleClose}>
            取消
          </Button>
        </FItem>
      </Form>
    </Modal>
  )
}

export default AddUser;
import { Modal, Form, Input, Button } from "antd";
const { Item: FItem } = Form;

import "./reset-pwd.css";

const restPwd = (props) => {
  const onFinish = () => {
    props.setVisible(false);
  };
  const onFinishFailed = () => { };
  return (
    <>
      <Modal visible={props.visible} title="密码重置" closable={false} footer={null}>
        <div className="rest-pwd-tips">为了您的账户安全首次登录请您重置密码</div>
        <Form
          name="restPwd"
          className="reset-pwd-form"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="false"
        >
          <FItem
            name="newPwd"
            label="新密码"
            rules={[{ required: true, message: "请输入新密码" }]}
          >
            <Input.Password placeholder="请输入新密码" />
          </FItem>
          <FItem
            name="reNewPwd"
            label="确认密码"
            rules={[{ required: true, message: "请输入登录密码" }]}
          >
            <Input.Password placeholder="请确认密码" />
          </FItem>
          <FItem wrapperCol={{ offset: 6, span: 12 }}>
            <Button type="primary" htmlType="submit" block={true}>
              确定
            </Button>
          </FItem>
        </Form>
      </Modal>
    </>
  );
};

export default restPwd;

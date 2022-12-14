import { Button, Form, Input, Modal, Tabs, Row, Col } from 'antd';
import { useState } from 'react';
import userSlice from '@/slices/api/user';
import ResetPwd from './reset-pwd';

const { TabPane } = Tabs;
const { Item: FItem } = Form;
import "./login.styl";

const THIRD_LOGIN_TYPES = [{
  name: '政企服务登录',
  key: 1
}, {
  name: "浙政钉登录",
  key: 2
}, {
  name: "易政网",
  key: 3
}]



const Login = () => {
  const [type, setType] = useState('1');
  const [visible, setVisible] = useState(false);
  const onHandleTab = (tabkey) => {
    setType(tabkey);
  }

  const [login] = userSlice.useLoginMutation();

  const handleForgotClick = () => {
    Modal.warning({
      title: '忘记密码',
      okText: '知道了',
      content: (
        <>
          <div>请联系管理员某某某完成密码重置</div>
        </>
      )
    })
  };

  const onFinish = (values) => {
    login({
      ...values,
    });
    console.log(values, 'values');
  };
  const onFinishFailed = () => { };

  return <div className="wrapper-login">
    <div className="login-body">
      <Tabs className="login-type" onTabClick={onHandleTab} defaultActiveKey='1' centered>
        <TabPane tab="账号密码" key="1"></TabPane>
        <TabPane tab="手机号验证码" key="2"></TabPane>
      </Tabs>
      <Form name="login"
        size="large"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="false"
      >
        {
          type === '1' ? <>
            <FItem
              name="loginName"
              rules={[{ required: true, message: '请输入账户/手机号' }]}
            >
              <Input placeholder='请输入账户/手机号' />
            </FItem>

            <FItem
              name="passwd"
              rules={[{ required: true, message: '请输入登录密码' }]}
            >
              <Input.Password placeholder='请输入登录密码' />
            </FItem>
          </> : <>
            <FItem
              name="mobilephone"
              rules={[{ required: true, message: '请输入手机号' }]}
            >
              <Input />
            </FItem>
            <Row gutter={8}>
              <Col span={12}>
                <FItem
                  name="graphicsVerificationCode"
                  rules={[{ required: true, message: '请输入图形验证码' }]}
                >
                  <Input placeholder='请输入图形验证码' />
                </FItem>
              </Col>
              <Col>
                <div className="image-code" onClick={() => setVisible(!visible)}>
                  <img src="" />
                </div>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <FItem
                  name="mobileVerificationCode"
                  rules={[{ required: true, message: '请输入手机验证码' }]}
                >
                  <Input placeholder='请输入手机验证码' />
                </FItem>
              </Col>
              <Col>
                <Button>获取验证码</Button>
              </Col>
            </Row>
          </>
        }
        {type === '1' && <div className="forgot-password" onClick={handleForgotClick}>忘记密码?</div>
        }
        <FItem>
          <Button type="primary" htmlType="submit" block={true}>
            登录
          </Button>
        </FItem>
      </Form>
      <div className="third-party-login">
        <div className="wrapper-title">
          <span>第三方登录</span>
        </div>
        <ul className="wrapper-list">
          {THIRD_LOGIN_TYPES.map((m) => {
            return (<li key={m.key}>{m.name}</li>)
          })}
        </ul>
      </div>
      <ResetPwd visible={visible} setVisible={setVisible}></ResetPwd>
    </div>
  </div>;
};

export default Login;

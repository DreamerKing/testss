import { Modal, Form, Input, Checkbox, Button, Select, Space } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import "@/pages/common/style/modal-form.styl";

const { Item: FItem } = Form;
const { Option: SOption } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { span: 16, offset: 8 },
}

export default function BankForm(props) {
  const onFinish = () => { };
  const onFinishFailed = () => { };
  const handleClose = () => {
    props.setVisible(false);
  };
  return (
    <Modal footer={null} visible={props.visible} closable={false}>
      <div className="modal-title">
        <span>新增政策分类</span>
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
          label="政策分类名称"
          name="username"
          rules={[{ required: true, message: '请输入分类名称' }]}
        >
          <Input placeholder='请输入分类名称' />
        </FItem>
        <FItem label="上级分类" name="account2">
          <Select placeholder="若非子分类，无需选择">
            <SOption value="1">市</SOption>
            <SOption value="2">区县</SOption>
            <SOption value="3">镇街</SOption>
            <SOption value="4">管委会</SOption>
            <SOption value="5">社区</SOption>
          </Select>
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

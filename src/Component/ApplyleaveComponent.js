import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  TextArea,
} from 'antd';
const ApplyleaveComponent = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{
        span: 15,
      }}
      wrapperCol={{
        span: 35,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 800,
      }}
    >
      {/* <Form.Item label="Form Size" name="size">
        <Radio.Group1>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group1>
      </Form.Item> */}

      <Form.Item label="Full Name"
       name={['user', 'name']}
            rules={[
                {
                  required: true,
                  message: "Please input your Full Name!",
                },
              ]}>
        <Input />
      </Form.Item>

      <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
          required: true,
          message: "Please input your Email!",
        },
      ]}
    >
      <Input />
      </Form.Item>

      <Form.Item label="Position"
       name={['user', 'position']}
            rules={[
                {
                  required: true,
                  message: "Please input your Position!",
                },
              ]}>
        <Input />
      </Form.Item>

      <Form.Item label="Leave Type"
      name="leave_type"
      rules={[
        {
          required: true,
          message: "Please input your Dropdown!",
        },
      ]}>
        <Select>
          <Select.Option value="medical">Medical Leave</Select.Option>
          <Select.Option value="paid">Paid Leave</Select.Option>
          <Select.Option value="unpaid">Unpaid Leave</Select.Option>
          <Select.Option value="maternailty">Maternailty Leave</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Leave Start"
            name="leave_start"
            rules={[
              {
                required: true,
                message: "Please input your Date Picker!",
              },
            ]}>
      <DatePicker />
      </Form.Item>

      <Form.Item label="Leave End"
            name="leave_end"
            rules={[
              {
                required: true,
                message: "Please input your Date Picker!",
              },
            ]}>
      <DatePicker />
      </Form.Item>

      <Form.Item label="Leave Numbers"
                  name="input_number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Leave Number!",
                    },
                  ]}>
        <InputNumber />
      </Form.Item>

      <Form.Item label="Details of Leave"
       name={['user', 'textarea']}
            rules={[
                {
                  required: true,
                  message: "Please input your Details of Leave!",
                },
              ]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};
export default ApplyleaveComponent;
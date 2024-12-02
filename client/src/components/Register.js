import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const Register = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', values);
      message.success(response.data.message);
    } catch (error) {
      console.error(error);
      message.error('Something went wrong');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2>Register</h2>
      <Form
        name="register"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Enter Username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            { required: true, message: 'Enter e-mail address!' },
            { type: 'email', message: 'Enter e-mail address correctly!' },
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Enter Password!' },
            { min: 6, message: 'Password should be least 6 character!' },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
          
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;

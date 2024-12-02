import React from "react";
import { Form, Input, Button, Card, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", values);
      console.log(response);
      message.success("Login successful!");
      setTimeout(() => {
        navigate("/success");
      }, 1000);
    } catch (error) {
      console.error(error);
      message.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card title="Giriş Yap" style={{ width: 300, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <Form
          name="login_form"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: "Enter e-mail address!" },
              { type: "email", message: "Enter e-mail address correctly!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="E-mail" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Enter Password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Button className="primary" onClick={() => navigate('/register')}>Create New Account</Button>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div>
  );
};

export default Login;

import React from "react";
import { Form, Input, Button, Layout, Image, Space } from "antd";
import { useHistory } from "react-router-dom";
import { buttonStyle } from "../styles";
const { Content } = Layout;

function Login() {
  let history = useHistory();

  const onFinish = (values) => {
    history.push("/");
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Content
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Space size={30}>
        <Image width={170} src="img/logonegrol.png" />
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Usuario"
            name="username"
            rules={[
              {
                required: true,
                message: "Usuario no valido",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Contraseña no valida",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={buttonStyle}>
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Content>
  );
}

export default Login;

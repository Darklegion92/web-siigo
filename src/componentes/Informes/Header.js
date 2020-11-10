import React from "react";
import { Row, Select, DatePicker, Form, Button, Space } from "antd";

const { Option } = Select;

const { RangePicker } = DatePicker;

function Header() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="informes"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      style={{ width: "100%" }}
    >
      <Row justify="center" align="middle">
        <Space size={28}>
          <Form.Item
            label="Tipo de Informe"
            name="tipo-informe"
            rules={[{ required: true, message: "Ingresa tipo de informe" }]}
          >
            <Select showSearch style={{ width: 200 }}>
              <Option>Seleccione...</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Rando de Fechas"
            name="fechas"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Consultar
            </Button>
          </Form.Item>
        </Space>
      </Row>
    </Form>
  );
}

export default Header;

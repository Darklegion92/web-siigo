import React from "react";
import { Row, Select, DatePicker, Form, Button, Space } from "antd";
import locale from "antd/lib/locale/es_ES";
import { buttonStyle } from "../styles";

const { Option } = Select;

const { RangePicker } = DatePicker;

function Header({ onFinish }) {
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
            rules={[{ required: true, message: "Selecciona un Informe" }]}
          >
            <Select style={{ width: 200 }}>
              <Option>Seleccione...</Option>
              <Option key="perecederos">Perecederos</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Familia"
            name="familia"
            rules={[{ required: true, message: "Selecciona una Familia" }]}
          >
            <Select style={{ width: 150 }}>
              <Option>Seleccione...</Option>
              <Option key={6}>Carnes</Option>
              <Option key={15}>Fruver</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Sucursal"
            name="sucursal"
            rules={[{ required: true, message: "Selecciona una Sucursal" }]}
          >
            <Select style={{ width: 150 }}>
              <Option>Seleccione...</Option>
              <Option key={0}>Todas</Option>
              <Option key={1}>Kenedy</Option>
              <Option key={2}>Libertad</Option>
              <Option key={3}>Niza</Option>
              <Option key={4}>Centro 17</Option>
              <Option key={5}>Riviera</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Rando de Fechas"
            name="fechas"
            rules={[
              { required: true, message: "Ingresa Fecha Inicial y Final" },
            ]}
          >
            <RangePicker locale={locale} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={buttonStyle} htmlType="submit">
              Consultar
            </Button>
          </Form.Item>
        </Space>
      </Row>
    </Form>
  );
}

export default Header;

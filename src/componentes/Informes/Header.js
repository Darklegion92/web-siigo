import React from 'react'
import { Row, Select, DatePicker, Form, Button, Space } from 'antd'
import locale from 'antd/lib/locale/es_ES'
import { buttonStyle } from '../styles'

const { Option } = Select

const { RangePicker } = DatePicker

function Header ({ onFinish }) {
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name='informes'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout='vertical'
      style={{ width: '100%' }}
    >
      <Row justify='center' align='middle'>
        <Space size={28}>
          <Form.Item
            label='Tipo de Informe'
            name='tipo-informe'
            rules={[{ required: true, message: 'Ingresa tipo de informe' }]}
          >
            <Select showSearch style={{ width: 200 }}>
              <Option>Seleccione...</Option>
              <Option key='perecederos'>Informe Perecederos</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Rando de Fechas'
            name='fechas'
            rules={[
              { required: true, message: 'Ingresa Fecha Inicial y Final' }
            ]}
          >
            <RangePicker locale={locale} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' style={buttonStyle} htmlType='submit'>
              Consultar
            </Button>
          </Form.Item>
        </Space>
      </Row>
    </Form>
  )
}

export default Header

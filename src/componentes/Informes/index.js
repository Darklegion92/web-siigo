import React, { useContext } from 'react'
import { Row, Col, Space } from 'antd'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'
import { GlobalContext } from '../../context/GlobalContext'

function Informes () {
  const { consultarPerecederos } = useContext(GlobalContext)
  const onFinish = datos => {
    consultarPerecederos(datos.fechas)
  }

  return (
    <Col span={24}>
      <Space size={30} direction='vertical' style={{ width: '100%' }}>
        <Row align='top'>
          <Header onFinish={onFinish} />
        </Row>
        <Row>
          <Body />
        </Row>
        <Row justify='center'>
          <Footer />
        </Row>
      </Space>
    </Col>
  )
}

export default Informes

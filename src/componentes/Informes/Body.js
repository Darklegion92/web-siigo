import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Codigo',
    dataIndex: 'codigo',
    key: 'codigo'
  },
  {
    title: 'Descripción',
    dataIndex: 'descripcion',
    key: 'descripcion'
  },
  {
    title: 'Inv. Inicial',
    dataIndex: 'invinicial',
    key: 'invinicial'
  },
  {
    title: 'Valor',
    dataIndex: 'invinicialval',
    key: 'invinicialval'
  },
  {
    title: 'Compras',
    dataIndex: 'compras',
    key: 'compras'
  },
  {
    title: 'Valor',
    dataIndex: 'comprasval',
    key: 'comprasval'
  },
  {
    title: 'Ventas',
    dataIndex: 'ventas',
    key: 'ventas'
  },
  {
    title: 'Valor',
    dataIndex: 'ventasval',
    key: 'ventasval'
  },
  {
    title: 'Merma',
    dataIndex: 'merma',
    key: 'merma'
  },
  {
    title: 'Valor',
    dataIndex: 'mermaval',
    key: 'mermaval'
  },
  {
    title: 'Inv. Final',
    dataIndex: 'invfinal',
    key: 'invfinal'
  },
  {
    title: 'Valor',
    dataIndex: 'invfinalval',
    key: 'invfinalval'
  },
  {
    title: 'Diferecnia',
    dataIndex: 'diferencia',
    key: 'diferencia'
  },
  {
    title: 'Valor',
    dataIndex: 'diferenciaval',
    key: 'diferenciaval'
  },
  {
    title: 'Costo',
    dataIndex: 'costo',
    key: 'costo'
  }
]

function Body () {
  return <Table columns={columns} style={{ width: '100%' }} />
}

export default Body

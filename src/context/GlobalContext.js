import React, { useState } from 'react'
import axios from 'axios'

const GlobalContext = React.createContext({})
const { Provider, Consumer } = GlobalContext

const GlobalProvider = ({ children }) => {
  // const [fechas, setFechas] = useState([])
  const [datosTable, setDatosTabla] = useState([])
  const [user, setUser] = useState()

  const consultarPerecederos = fechas => {
    console.log(fechas)
  }

  const login = datos => {
    console.log(datos)

    return false
  }
  return (
    <Provider value={{ consultarPerecederos, user, login }}>
      {children}
    </Provider>
  )
}

export { GlobalProvider, Consumer as GlobalConsumer, GlobalContext }

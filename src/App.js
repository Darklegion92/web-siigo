import React, { useEffect, useContext } from 'react'
import { Layout } from 'antd'
import { Switch, Route, useHistory } from 'react-router-dom'
import Login from './componentes/Login'
import Home from './componentes/Home'
import { GlobalContext } from './context/GlobalContext'

function App () {
  const { user } = useContext(GlobalContext)
  let history = useHistory()

  if (!user) {
    history.push('/login')
  }

  return (
    <Layout style={{ height: '650px' }}>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App

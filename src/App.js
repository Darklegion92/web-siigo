import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./componentes/Login";
import Home from "./componentes/Home";

function App() {
  return (
    <Layout style={{ height: "650px" }}>
      <Router className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;

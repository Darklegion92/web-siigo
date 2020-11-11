import React, { useState } from "react";
import axios from "axios";

const GlobalContext = React.createContext({});
const { Provider, Consumer } = GlobalContext;

const GlobalProvider = ({ children }) => {
  const [datosTable, setDatosTabla] = useState([]);
  const [user, setUser] = useState({ name: "Administrador", user: "admin" });

  const consultarPerecederos = (datos) => {
    console.log(datos);
  };

  const login = (datos) => {
    return true;
  };
  return (
    <Provider value={{ consultarPerecederos, user, login }}>
      {children}
    </Provider>
  );
};

export { GlobalProvider, Consumer as GlobalConsumer, GlobalContext };

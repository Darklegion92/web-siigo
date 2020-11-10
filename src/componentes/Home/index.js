import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import Default from "./Default";
import Informes from "../Informes";

const { Header, Content, Footer } = Layout;
function Home() {
  const [current, setCurrent] = useState("default");

  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Header>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="" icon={<AppstoreOutlined />}>
            Informes
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {current == "default" ? <Default /> : <Informes />}
      </Content>
    </>
  );
}

export default Home;

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Navbar from "components/Navbar";
import React from "react";
import Styles from "../styles/pages/Faq.module.scss";

const { Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("How it works", "sub1", <MailOutlined />),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />),
  getItem("Navigation Three", "sub3", <SettingOutlined />),
];
const onClick = (e) => {
  console.log("click", e);
};

export default function faq() {
  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <Layout className={Styles.layout}>
          <Sider width={200} className={Styles.sider}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["sub1"]}
              style={{ height: "80vh", borderRight: 0, width: "15rem" }}
              items={items}
              onClick={onClick}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
}

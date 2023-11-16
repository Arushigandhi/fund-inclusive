import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Collapse, Layout, Menu } from "antd";
import Navbar from "components/Navbar";
import React from "react";
import Styles from "../styles/pages/Faq.module.scss";

const { Content, Sider } = Layout;
const { Panel } = Collapse;

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

const FAQs = [
  {
    title: "How are we different from other startup investing platforms?",
    description:
      "We provide our users with an aggregated dealflow from the best channels including VCs, Incubators, Angels and Angel Networks. It is crucial that investors have a variety of dealflow choices so they may choose the businesses they believe to be the best thesis fit for them.",
  },
  {
    title: "How do we charge for a startup's fundraising campaign?",
    description:
      "We charge startups a success fee only after the campaign closes which varies on the size, duration and the instrument used for the particular campaign. We charge our investors a nominal 2% transaction fee on the time of investment entry and exit.",
  },
  {
    title: "What is the structure of the investments?",
    description:
      "We use CCPS, CCD and other instruments to facilitate fundraising. A LLP is created for investors to contribute to. As an investor, you will become a Partner to this LLP and represent your investment. Your stake in the LLP will represent the amount of investment made by you.",
  },
  {
    title: "Why should startups work with Fundinc?",
    description:
      "Fundinc is more than a fundraising platform! It is also a platform which helps startups take their journey from zero to one. We provide our startups with strategic networking sources which helps them to raise funds and achieve PMF.",
  },
  {
    title: "Why should investors invest through Fundinc?",
    description:
      "It is tough for investors to keep end-to-end track of their dealflow. Fundinc aggregated investment deals of VCs, Angel Networks and other sources providing them with curated portfolios. Investors don’t have to pay hefty transaction charges with Fundinc.",
  },
  {
    title: "Does Fundinc guarantee returns on Investments?",
    description:
      "Fundinc only facilitates the capital transfusion from investors to startups, after which it depends on the startup’s performance. We provide access to all relevant legal/financial documents of the company to ensure transparency.",
  },
];

function FAQCollapse() {
  return (
    <Collapse defaultActiveKey={["1"]}>
      {FAQs.map((faq, index) => (
        <Panel header={faq.title} key={index + 1}>
          <p>{faq.description}</p>
        </Panel>
      ))}
    </Collapse>
  );
}

export default function faq() {
  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        {/* <Layout className={Styles.layout}>
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
              style={{ padding: 24, margin: 0, minHeight: 280 }}
            > */}
        <FAQCollapse />
        {/* </Content>
          </Layout>
        </Layout> */}
      </div>
    </>
  );
}

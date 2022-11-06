import { Col, Row, Collapse } from "antd";
import Navbar from "components/Navbar";
import React from "react";
import Styles from "../styles/pages/Faq.module.scss";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function faq() {
  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <h2 className={Styles.title}>FAQ</h2>
        <h1 className={Styles.subtitle}>What can we help you with?</h1>
        <Row align="space-between">
          <Col span={24} className={Styles.collapse}>
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </div>
    </>
  );
}

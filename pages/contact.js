import Navbar from "components/Navbar";
import Styles from "../styles/pages/Raise.module.scss";
import { db } from "../lib/firebase";
import { Button, Col, Form, Input, message, Row, Select } from "antd";

const { TextArea } = Input;

export default function contact() {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    db.collection("raise-form")
      .add({
        ...values,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        message.success("Form submitted successfully");
        form.resetFields();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        message.error(error);
      });
  };
  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.box}>
          <Row>
            <Col span={12}>
              <h2 className={Styles.title}>JOIN OUR COMMUNITY</h2>
              <h1 className={Styles.subtitle}>We’d love to hear from you.</h1>
              <p className={Styles.text}>
                Please fill out this form and we’ll be in touch.
              </p>
            </Col>
            <Col span={12}>
              <Form layout="vertical" onFinish={handleSubmit} form={form}>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input size="large" placeholder="Full Name" type={"text"} />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input size="large" placeholder="Email" type={"email"} />
                </Form.Item>

                <Form.Item name="linkedin">
                  <Input
                    size="large"
                    placeholder="LinkedIn Profile"
                    type={"text"}
                  />
                </Form.Item>
                <Form.Item name="stage">
                  <Select
                    size="large"
                    placeholder="Type of Individual"
                    type={"text"}
                  >
                    <Select.Option value="investor">Investor</Select.Option>
                    <Select.Option value="startup">Startups</Select.Option>
                    <Select.Option value="other">Other</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="message">
                  <TextArea
                    rows="6"
                    size="large"
                    placeholder="Message"
                    type={"text"}
                  />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  className={Styles.filledButton}
                >
                  Contact Us
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

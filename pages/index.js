import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Row,
  message,
  Avatar,
  Tag,
} from "antd";
import Navbar from "components/Navbar";
import Styles from "../styles/pages/Home.module.scss";
import { BsFillCaretRightFill } from "react-icons/bs";
import { db } from "../lib/firebase";
import Footer from "components/Footer";
import Header from "components/Header";
import Link from "next/link";
import { SlSocialLinkedin } from "react-icons/si";

export default function Home() {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    db.collection("emails")
      .add({
        email: values.email,
        createdAt: new Date(),
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        message.success("Email entered successfully");
        form.resetFields();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.hero}>
          <h1 className={Styles.title}>Invest in the future you desire.</h1>
          <h2 className={Styles.subtitle}>
            We’re dedicated to making it easy to invest in assets that have been
            reserved for the 1% so far.
          </h2>
          <Form layout="vertical" onFinish={handleSubmit} form={form}>
            <Row>
              <Form.Item name="email" style={{ marginRight: "1.2rem" }}>
                <Input
                  size="large"
                  placeholder="Enter your email to receive updates!"
                  type={"email"}
                />
              </Form.Item>
              <Button
                className={Styles.filledButton}
                style={{ width: "22%" }}
                htmlType="submit"
              >
                Get Early Access
              </Button>
            </Row>
          </Form>
        </div>
        <Row className={Styles.about}>
          <Col span={18}>
            <a className={Styles.howLink} href="learn">
              HOW DOES IT WORK?{" "}
              <BsFillCaretRightFill style={{ paddingTop: "2px" }} />
            </a>
            <h1 className={Styles.aboutTitle}>
              We want to increase accessiblity to investment opportunities in
              vetted early-stage startups working in the domains you believe in.
            </h1>
            <h2 className={Styles.aboutSubtitle}>
              Getting in early is everything, in the private markets!
            </h2>
          </Col>
        </Row>

        <Row className={Styles.features}>
          <div className={Styles.featureHeading}>
            <h1>FOR INVESTORS</h1>
          </div>
          <Row align="space-between" style={{ paddingLeft: "7rem" }}>
            <Col className={Styles.item}>
              <h1>Low minimum investment</h1>
              <p>
                Invest as little as ₹ 5000 in startups that are changing the
                world, allowing you to truly diversify your portfolio.
              </p>
            </Col>
            <Col className={Styles.item}>
              <h1>Track your portfolio</h1>
              <p>
                Stay up to date with your portfolio, see how your investments
                are doing and get access to their latest metrics.
              </p>
            </Col>
            <Col className={Styles.item}>
              <h1>Seamless subscribing</h1>
              <p>
                From exploring to due diligence to signing the documents, we
                make it easy for you to invest using technology.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className={Styles.features}>
          <Row align="space-between" style={{ paddingRight: "7rem" }}>
            <Col className={Styles.item}>
              <h1>Launch campaign</h1>
              <p>
                Get through our onboarding, launch your campaign and get access
                to our network of investors to raise capital.
              </p>
            </Col>
            <Col className={Styles.item}>
              <h1>Investor Interaction</h1>
              <p>
                Give your investors access to your latest progress updates and
                utilise the channel to gain feedback from investors.
              </p>
            </Col>
            <Col className={Styles.item}>
              <h1>Close your round</h1>
              <p>
                Let your precious hours be spent on building your startup and
                leave the fundraising to us by leveraging our network.
              </p>
            </Col>
          </Row>
          <div className={Styles.featureHeadingTwo}>
            <h1>FOR STARTUPS</h1>
          </div>
        </Row>
        <div className={Styles.team}>
          <h2 className={Styles.teamHeading}>THE FUND INC TEAM</h2>
          <Row align="center">
            <Col span={9} className={Styles.col}>
              <a
                href="https://www.linkedin.com/in/arushi-gandhi/"
                target="_blank"
              >
                <Avatar className={Styles.img} size={128} src="/2.jpg" />
                <h1>Arushi Gandhi</h1>
                <Tag color="red" style={{ margin: "1rem 0" }}>
                  Founder & CEO
                </Tag>
              </a>
            </Col>
            <Col span={9} className={Styles.col}>
              <a
                href="https://www.linkedin.com/in/deepesh-garg-4a14b7104/"
                target="_blank"
              >
                <Avatar className={Styles.img} size={128} src="/1.jpg" />
                <h1>Deepesh Garg </h1>
                <Tag color="red" style={{ margin: "1rem 0" }}>
                  Founder & COO
                </Tag>
              </a>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}

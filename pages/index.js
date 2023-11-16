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
  Modal,
} from "antd";
import Navbar from "components/Navbar";
import Styles from "../styles/pages/Home.module.scss";
import { BsFillCaretRightFill } from "react-icons/bs";
import { db } from "../lib/firebase";
import Footer from "components/Footer";
import Header from "components/Header";
import Link from "next/link";
import { SlSocialLinkedin } from "react-icons/si";
import { useEffect, useState } from "react";
import Script from "next/script";

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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isModalVisible) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isModalVisible]);

  return (
    <>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.hero}>
          <h1 className={Styles.title}>
            Empower Her Code: Unleashing Potential.
          </h1>
          <h2 className={Styles.subtitle}>
            Step into Girlscript’s Circle of Empowerment – Elevating Women in
            Technology Through Mentorship, Community, and Innovation
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
              Girlscript champions the use of technology for empowerment,
              guiding women and non-binary individuals in tech through
              mentorship, workshops, and a supportive community. We prioritize
              technical skills, personal, and professional growth, ensuring our
              members are prepared to lead in the tech industry. Join our
              movement to celebrate diversity and drive innovation for women in
              tech.
            </h1>
            <h2 className={Styles.aboutSubtitle}>
              Girlscript fosters an empowering tech community through mentorship
              and skill-building for women and non-binary individuals.
            </h2>
          </Col>
        </Row>

        <Row className={Styles.features}>
          <div className={Styles.featureHeading}>
            <h1>ALL FOR ONE</h1>
          </div>
          <Row align="space-between" style={{ paddingLeft: "7rem" }}>
            <Col className={Styles.item}>
              <h1>Empowerment Through Tech</h1>
              <p>
                Unlock your potential with our tech-focused empowerment programs
                designed for women and non-binary individuals.
              </p>
            </Col>
            <Col className={Styles.item}>
              <h1>Inclusive Mentorship</h1>
              <p>
                Receive personalized guidance from industry leaders in a
                welcoming environment that celebrates diversity.
              </p>
            </Col>
            <Col className={Styles.item}>
              <h1>Skill-Building Workshops</h1>
              <p>
                Enhance your technical toolkit with practical, hands-on
                workshops that cater to various expertise levels.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className={Styles.features}>
          <Row align="space-between" style={{ paddingRight: "7rem" }}>
            <Col className={Styles.item}>
              <h1>Community Support Network</h1>
              <p>
                Connect with peers and allies in a strong community that
                provides support, resources, and opportunities.
              </p>
            </Col>
            <Col className={Styles.item}>
              <h1>Holistic Development</h1>
              <p>
                Cultivate your personal and professional growth to become a
                well-rounded, innovative force in the tech world.
              </p>
            </Col>
            <Col className={Styles.item}>
              <h1>Trailblazer Pathways</h1>
              <p>
                Equip yourself with the skills and confidence to break barriers
                and set new precedents in the technology sector.
              </p>
            </Col>
          </Row>
          <div className={Styles.featureHeadingTwo}>
            <h1>ONE FOR ALL</h1>
          </div>
        </Row>
        <div className={Styles.team}>
          <h2 className={Styles.teamHeading}>THE GIRLSCIPT TEAM</h2>
          <Row align="center">
            <Col span={6} className={Styles.col}>
              <a
                href="https://www.linkedin.com/in/g-s-rakshak-0603301b5/"
                target="_blank"
              >
                <Avatar className={Styles.img} size={128} src="/rakshak.jpeg" />
                <h1>G S Rakshak</h1>
                <Tag color="pink" style={{ margin: "1rem 0" }}>
                  Design Head{" "}
                </Tag>
              </a>
            </Col>
            <Col span={6} className={Styles.col}>
              <a
                href="https://www.linkedin.com/in/arushi-gandhi/"
                target="_blank"
              >
                <Avatar className={Styles.img} size={128} src="/2.jpg" />
                <h1>Arushi Gandhi</h1>
                <Tag color="pink" style={{ margin: "1rem 0" }}>
                  Web Dev Head
                </Tag>
              </a>
            </Col>
            <Col span={6} className={Styles.col}>
              <a
                href="https://www.linkedin.com/in/anshika-goel-5ab1441b7/"
                target="_blank"
              >
                <Avatar className={Styles.img} size={128} src="/anshika.jpeg" />
                <h1>Anshika Goel</h1>
                <Tag color="pink" style={{ margin: "1rem 0" }}>
                  App Dev Head
                </Tag>
              </a>
            </Col>
            <Col span={6} className={Styles.col}>
              <a
                href="https://www.linkedin.com/in/deepesh-garg-4a14b7104/"
                target="_blank"
              >
                <Avatar className={Styles.img} size={128} src="/1.jpg" />
                <h1>Deepesh Garg </h1>
                <Tag color="pink" style={{ margin: "1rem 0" }}>
                  ML Head
                </Tag>
              </a>
            </Col>
          </Row>
        </div>
        <div className={Styles.meet}>
          <h1 className={Styles.meetHeading}>SCHEDULE A MEETING</h1>
          <Row>
            <Col
              className={Styles.col}
              style={{ marginRight: "2rem", alignItems: "center" }}
            >
              <h1> Need Help? Talk to us!</h1>
              <p>
                Want to know how you can invest or want to raise for your
                startup?
              </p>
              {/* <Button onClick={showModal}>Schedule Meeting</Button> */}
              <Button
                className={Styles.filledButton}
                style={{ width: "50%" }}
                onClick={showModal}
              >
                Schedule Meeting
              </Button>
              <Modal
                title="Schedule Meeting"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div
                  class="calendly-inline-widget"
                  data-url="https://calendly.com/arushi-gandhi/let-s-talk-fundinc"
                  style={{
                    minWidth: "320px",
                    height: "630px",
                  }}
                ></div>
              </Modal>
            </Col>
            <Col className={Styles.col}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.24813423145144!2d74.79260730425196!3d13.351204164952955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a62116ed59%3A0x96576885940510e!2sInnovation%20Centre%2C%20Manipal%20Institute%20of%20Technology%2C%20MIT%20Inside%20Rd%2C%20Eshwar%20Nagar%2C%20Manipal%2C%20Karnataka%20576104!5e0!3m2!1sen!2sin!4v1679408755987!5m2!1sen!2sin"
                width="700"
                height="400"
                style={{ borderRadius: "0.2rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

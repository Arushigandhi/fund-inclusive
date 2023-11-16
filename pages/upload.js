import {
  Card,
  Spin,
  Tag,
  Form,
  Input,
  Button,
  Upload,
  Select,
  Row,
  Col,
  message,
} from "antd";
import DashboardLayout from "../components/DashboardLayout";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { db, storageRef } from "../lib/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "context/AuthUserContext";
import Navbar from "components/Navbar";
import Styles from "../styles/pages/Raise.module.scss";

const { Option } = Select;
const { TextArea } = Input;

export default function upload() {
  const [form] = Form.useForm();
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState({ imgUrl: "" });
  const uploadProps = {
    onChange(info) {
      if (info.file.status === "done") {
        console.log(info.file);
        setImageAsFile(() => info.file);
      }
    },
  };
  const onFinish = async (values) => {
    console.log(values);
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storageRef
      .child("pitch/" + imageAsFile.name)
      .put(imageAsFile.originFileObj);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // // gets the functions from storage refences the image storage in firebase by the children
        // // gets the download url then sets the image from firebase as the value for the imgUrl key:
        // storage.ref('images').child(imageAsFile.name).getDownloadURL()
        //  .then(fireBaseUrl => {
        //   console.log(fireBaseUrl);
        //    setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
        //  })
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageAsUrl((prevObject) => ({
            ...prevObject,
            imgUrl: downloadURL,
          }));
          var startupRef = db.collection("startups").doc();
          startupRef
            .set({
              founderLinkedIn: values.founderLinkedIn,
              founderName: values.founderName,
              fundsRaised: values.fundsRaised,
              ideaDescription: values.ideaDescription,
              industry: values.industry,
              name: values.name,
              pitchDeck: downloadURL,
              revenueGenerated: values.revenueGenerated,
              stage: values.stage,
              website: values.website,
            })
            .then(() => {
              message.success("Uploaded Successfully!");
              form.resetFields();
            });
        });
      }
    );
  };

  const industryOptions = [
    { value: "agriculture", label: "Agriculture" },
    { value: "automotive", label: "Automotive" },
    { value: "aviation", label: "Aviation" },
    { value: "banking", label: "Banking" },
    { value: "construction", label: "Construction" },
    { value: "consumer goods", label: "Consumer Goods" },
    { value: "defense", label: "Defense" },
    { value: "education", label: "Education" },
    { value: "energy", label: "Energy" },
    { value: "entertainment", label: "Entertainment" },
    { value: "environmental", label: "Environmental" },
    { value: "fashion", label: "Fashion" },
    { value: "finance", label: "Finance" },
    { value: "food and beverage", label: "Food and Beverage" },
    { value: "healthcare", label: "Healthcare" },
    { value: "hospitality", label: "Hospitality" },
    { value: "insurance", label: "Insurance" },
    { value: "legal", label: "Legal" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "media", label: "Media" },
    { value: "mining", label: "Mining" },
    { value: "nonprofit", label: "Nonprofit" },
    { value: "pharmaceuticals", label: "Pharmaceuticals" },
    { value: "real estate", label: "Real Estate" },
    { value: "retail", label: "Retail" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
    { value: "telecommunications", label: "Telecommunications" },
    { value: "transportation", label: "Transportation" },
    { value: "utilities", label: "Utilities" },
    { value: "other", label: "Other" },
  ];

  const startupStageOptions = [
    { value: "ideation", label: "Ideation" },
    { value: "concept", label: "Concept" },
    { value: "prototype", label: "Prototype" },
    { value: "MVP", label: "Minimum Viable Product (MVP)" },
    { value: "growth", label: "Growth" },
    { value: "scale", label: "Scale" },
  ];

  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.box}>
          <Row>
            <Col span={12}>
              <h2 className={Styles.title}>APPLY TO HIRE FROM GS</h2>
              <h1 className={Styles.subtitle}>Tell us about your company</h1>
              <p className={Styles.text}>
                Please fill out this form and we’ll be in touch.
              </p>
            </Col>
            <Col span={12}>
              <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a name for your startup",
                    },
                  ]}
                >
                  <Input placeholder="Company name" size="large" />
                </Form.Item>

                <Form.Item
                  label="Website"
                  name="website"
                  rules={[
                    {
                      required: true,
                      message: "Please enter an industry for your startup",
                    },
                  ]}
                >
                  <Input placeholder="Company Website" size="large" />
                </Form.Item>

                <Form.Item
                  label="Founder Name"
                  name="founderName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter an industry for your startup",
                    },
                  ]}
                >
                  <Input placeholder="Founder Name" size="large" />
                </Form.Item>

                <Form.Item
                  label="Founder LinkedIn"
                  name="founderLinkedIn"
                  rules={[
                    {
                      required: true,
                      message: "Please enter an industry for your startup",
                    },
                  ]}
                >
                  <Input placeholder="Founder LinkedIn" size="large" />
                </Form.Item>

                <Form.Item
                  label="Industry"
                  name="industry"
                  rules={[
                    {
                      required: true,
                      message: "Please enter an industry for your startup",
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    placeholder="Select relevant industries"
                    style={{ width: "100%" }}
                    size="large"
                  >
                    {industryOptions.map((industry) => (
                      <Option key={industry.value} value={industry.value}>
                        {industry.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Stage"
                  name="stage"
                  rules={[
                    {
                      required: true,
                      message: "Please enter an industry for your startup",
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    placeholder="Select stage of company"
                    style={{ width: "100%" }}
                    size="large"
                  >
                    {startupStageOptions.map((industry) => (
                      <Option key={industry.value} value={industry.value}>
                        {industry.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Idea Description"
                  name="ideaDescription"
                  rules={[
                    {
                      required: true,
                      message: "Please enter an industry for your startup",
                    },
                  ]}
                >
                  <TextArea placeholder="Idea Description" rows="5" />
                </Form.Item>

                <Form.Item
                  label="Revenue Generated"
                  name="revenueGenerated"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please enter the revenue generated by your startup",
                    },
                  ]}
                >
                  <Input placeholder="Revenue generated" size="large" />
                </Form.Item>

                <Form.Item
                  label="Funds Raised Til Date"
                  name="fundsRaised"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please enter the revenue generated by your startup",
                    },
                  ]}
                >
                  <Input placeholder="Funds Raised" size="large" />
                </Form.Item>

                <Form.Item
                  label="Pitch Deck"
                  name="pitchDeck"
                  rules={[
                    {
                      required: true,
                      message: "Please upload your pitch deck",
                    },
                  ]}
                >
                  <Upload {...uploadProps}>
                    <Button>Click to upload</Button>
                  </Upload>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

import { Button, Card, Form, Input, message } from "antd";
import Header from "components/Header";
import { useAuth } from "context/AuthUserContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Styles from "../styles/pages/Login.module.scss";

export default function login() {
  const router = useRouter();

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (values) => {
    createUserWithEmailAndPassword(values.email, values.password)
      .then(async () => {
        console.log("Success. The user is created in firebase");
        message.success("Registered successfully");
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
        message.error(error.message);
      });
  };

  return (
    <>
      <Header />
      <div className={Styles.container}>
        <Card title="Create Account" className={Styles.card}>
          <Form layout="vertical" onFinish={onSubmit}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
              label="Name"
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
              label="Email"
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              label="Password"
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className={Styles.loginBtn}
              >
                Register
              </Button>
            </Form.Item>
            <p>
              Already have an account? <a href="/login">Sign In</a>
            </p>
          </Form>
        </Card>
      </div>
    </>
  );
}

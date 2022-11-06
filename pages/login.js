import { Button, Card, Form, Input, message } from "antd";
import Header from "components/Header";
import { useAuth } from "context/AuthUserContext";
import { useRouter } from "next/router";
import React from "react";
import Styles from "../styles/pages/Login.module.scss";

export default function login() {
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = (values) => {
    signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        message.success("Login successful");
        router.push("/dashboard");
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
        <Card title="Sign In" className={Styles.card}>
          <Form layout="vertical" onFinish={onSubmit}>
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
                Login
              </Button>
            </Form.Item>
            <p>
              Don't have an account? <a href="/register">Sign Up</a>
            </p>
          </Form>
        </Card>
      </div>
    </>
  );
}

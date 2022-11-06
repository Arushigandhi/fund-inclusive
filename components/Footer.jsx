import { Image, Row } from "antd";
import Link from "next/link";
import React from "react";
import Styles from "../styles/components/Navbar.module.scss";

export default function Footer() {
  return (
    <Row className={Styles.footer} align="space-between">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={90}
          preview={false}
          className={Styles.img}
        />
      </Link>
      <p>Giving everyone access to early-stage startup investing!</p>
    </Row>
  );
}

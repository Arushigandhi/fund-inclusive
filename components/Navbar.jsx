import { Button, Col, Image, Layout, Row } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";
import Styles from "styles/components/Navbar.module.scss";

export default function Navbar() {
  // useEffect(() => {
  //   const changeCSS = () => {
  //     var navElement = document.getElementById("navbar");
  //     if (window.scrollY <= 80) {
  //       navElement.style.borderBottom = "none";
  //       navElement.style.background = "none";
  //     } else {
  //       navElement.style.borderBottom = "1px solid #e3e8ed";
  //       navElement.style.background = "#fff";
  //     }
  //   };

  //   window.addEventListener("scroll", changeCSS);
  // });
  return (
    <Row justify="center">
      <div className={Styles.navbar} id="navbar">
        <Row justify="space-between">
          <Row align="center">
            <Link href="/">
              <Image
                src="/gs.png"
                width={80}
                preview={false}
                className={Styles.img}
              />
            </Link>
            {/* <p className={Styles.name}>Fund Inc.</p> */}
          </Row>
          <div>
            {/* <a className={Styles.navbarLink} href="learn">
              Learn
            </a> */}
            {/* <a className={Styles.navbarLink} href="faq">
              FAQ
            </a> */}
            <Button className={Styles.emptyButton}>
              <Link href="/contact">JOIN US</Link>
            </Button>
            <Button className={Styles.emptyButton}>
              <Link href="/upload">APPLY TO HIRE</Link>
            </Button>
            <Button className={Styles.filledButton}>
              <Link href="/login">LOGIN</Link>
            </Button>
          </div>
        </Row>
      </div>
    </Row>
  );
}

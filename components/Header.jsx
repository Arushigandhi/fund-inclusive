import { Image } from "antd";
import Link from "next/link";
import React from "react";
import Styles from "styles/components/Navbar.module.scss";

export default function Header() {
  return (
    <div className={Styles.header}>
      <Link href="/">
        <Image
          src="/logo.svg"
          width={110}
          preview={false}
          className={Styles.img}
        />
      </Link>
    </div>
  );
}

import { Col, Row, Image } from "antd";
import React from "react";
import Styles from "styles/components/Sidebar.module.scss";
import { AiOutlineHome, AiOutlineCar } from "react-icons/ai";
import { BsBuilding, BsBriefcase } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const sidebarData = [
    {
      name: "Dashboard",
      icon: <AiOutlineHome className={Styles.navIcon} />,
      path: "/dashboard",
    },
    {
      name: "Companies",
      icon: <BsBuilding className={Styles.navIcon} />,
      path: "/companies",
    },
    {
      name: "Engaged",
      icon: <BsBriefcase className={Styles.navIcon} />,
      path: "/portfolio",
    },
    // {
    //   name: "B",
    //   icon: <FiTool className={Styles.navIcon} />,
    //   path: "/develop",
    // },
  ];

  return (
    <Col
      align="middle"
      justify="space-between"
      className={Styles.sidebarContainer}
    >
      <Link href="/">
        <div className={Styles.sidebarHeading}>
          <Image
            src="/gs.png"
            width={110}
            preview={false}
            className={Styles.img}
          />
        </div>
      </Link>
      <nav className={Styles.sidebarItems}>
        {sidebarData.map((item, index) => (
          <Link href={item.path} key={index}>
            <Row
              className={
                router.pathname === item.path
                  ? Styles.activenavItem
                  : Styles.navItem
              }
            >
              <Col>{item.icon}</Col>
              <Col className={Styles.navItemName}>{item.name}</Col>
            </Row>
          </Link>
        ))}
      </nav>
    </Col>
  );
};

export default Sidebar;

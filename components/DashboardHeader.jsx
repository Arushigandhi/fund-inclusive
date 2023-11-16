import { Avatar, Col, Dropdown, Menu, Row } from "antd";
import { useRouter } from "next/router";
import Styles from "styles/components/DashboardHeader.module.scss";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "context/AuthUserContext";

const DashboardHeader = ({ title, subtitle }) => {
  const { authUser, loading, signOut } = useAuth();
  console.log(authUser);
  const profileMenu = (
    <Menu>
      {/* <Menu.Item>Profile</Menu.Item> */}
      {/* <Menu.Item>Settings</Menu.Item> */}
      <Menu.Item onClick={signOut}>
        <CiLogout /> Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Row
      justify="space-between"
      align="middle"
      className={Styles.DashboardHeaderContainer}
    >
      <Col className={Styles.DashboardHeaderLeft}>
        <Row>
          <Col>
            <div className={Styles.DashboardHeaderTitle}>{title}</div>
            <div className={Styles.DashboardHeaderSubtitle}>{subtitle}</div>
          </Col>
        </Row>
      </Col>
      <Col className={Styles.DashboardHeaderRight}>
        <Col>
          <Link href="/dashboard">
            <Dropdown
              overlay={profileMenu}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Avatar size={54} icon={<UserOutlined />} />
            </Dropdown>
          </Link>
        </Col>
      </Col>
    </Row>
  );
};

export default DashboardHeader;

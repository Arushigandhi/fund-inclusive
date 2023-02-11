import { Col, Image } from "antd";
import DashboardLayout from "components/DashboardLayout";
import { useAuth } from "context/AuthUserContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Styles from "../styles/pages/Dashboard.module.scss";

export default function companies() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);
  return (
    <DashboardLayout
      title="Browse Companies"
      subtitle="Learn about leading private companies by visiting their page. View news, financings and cap table information and select valuation inputs to track their value over time."
    >
      <Col align="center" justify="center" className={Styles.comingSoonBlock}>
        <Image src="/assets/coming-soon.svg" width={400} preview={false} />
        <p>
          Coming Soon! The Fund Inc. team is hard at work to bring
          <br />
          you vetted startups to invest in.
        </p>
      </Col>
    </DashboardLayout>
  );
}

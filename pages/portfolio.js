import { Row, Card, Button, Tag, Modal } from "antd";
import DashboardLayout from "components/DashboardLayout";
import { useAuth } from "context/AuthUserContext";
import { db } from "lib/firebase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Styles from "../styles/pages/Dashboard.module.scss";

export default function companies() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);

  const [startups, setStartups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const startupCollection = db.collection("startups");
      const startupSnapshot = await startupCollection
        .where("isPortfolio", "==", true)
        .get();
      const startupData = startupSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStartups(startupData);
      console.log(startupData);
    };
    fetchData();
  }, []);

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // Perform actions when "Pay Now" button is clicked
    console.log("Payment initiated");
    // Close the modal
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <DashboardLayout
      title="Engaged Companies"
      subtitle="Keep track of your companies and their updates over time. "
    >
      <Row gutter={[16, 16]}>
        {startups.map((startup) => (
          <Card
            key={startup.name}
            title={startup.name}
            style={{ width: 400, height: 300, marginRight: "2rem" }}
            className={Styles.Card}
          >
            <Card.Meta description={startup.ideaDescription} />
            <div style={{ marginTop: "16px" }}>
              {startup.industry.map((i) => (
                <Tag color="green">{i.toUpperCase()}</Tag>
              ))}
            </div>
            <Button
              onClick={showModal}
              style={{ marginTop: "2rem" }}
              type="default"
            >
              View More
            </Button>
            <Modal
              title="Fundinc Details"
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button key="pay" type="primary" onClick={handleOk}>
                  Invest Now
                </Button>,
                <Button key="cancel" onClick={handleCancel}>
                  Cancel
                </Button>,
              ]}
            >
              <p>
                Founder LinkedIn:{" "}
                <a href={startup.founderLinkedIn}>{startup.founderName}</a>
              </p>
              <p>Funds Raised: {startup.fundsRaised}</p>
              <p>Revenue Generated: {startup.revenueGenerated}</p>
              <p>Idea Description: {startup.ideaDescription}</p>
              <p>Stage of the Startup: {startup.stage}</p>
              <p>Industry: {startup.industry}</p>
              <p>
                Startup Website: <a href={startup.website}>{startup.name}</a>
              </p>
              <iframe
                title="Pitch Deck"
                src={`${startup.pitchDeck}#toolbar=0`}
                style={{
                  width: "100%",
                  height: "300px",
                  marginTop: "10px",
                }}
              />
            </Modal>
          </Card>
        ))}
      </Row>
    </DashboardLayout>
  );
}

import { Card, Col, Image, Row, Statistic } from "antd";
import DashboardLayout from "components/DashboardLayout";
import { useAuth } from "context/AuthUserContext";
import { db } from "lib/firebase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import CountUp from "react-countup";

// const formatter = (value) => <CountUp end={value} separator="," />;

export default function Dashboard() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  const [startupCount, setStartupCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);

  useEffect(() => {
    // Fetch startup count from Firebase
    const fetchStartupCount = async () => {
      const snapshot = await db.collection("startups").get();
      const count = snapshot.size;
      setStartupCount(count);
    };

    // Fetch user count from Firebase
    const fetchUserCount = async () => {
      const snapshot = await db.collection("emails").get();
      const count = snapshot.size;
      setUserCount(count);
    };

    fetchStartupCount();
    fetchUserCount();
  }, []);

  return (
    <DashboardLayout title="Dashboard">
      <Row>
        <Col>
          <Card title="Founder's Note" style={{ width: "40rem" }}>
            <p style={{ color: "#717171", fontSize: "1.1rem" }}>
              Dear Trailblazers,
              <br />
              <br />
              Welcome to our community dashboard! It fills me with pride to see
              the essence of Girlscript reflected in your passion and progress.
              This dashboard is where our mission unfolds, providing you with
              resources, mentorship, and a supportive network. Dive into the
              workshops, seek guidance, share knowledge, and embrace the power
              of our collective journey.
              <br />
              <br />
              Every challenge you tackle fuels our goal to empower the
              underrepresented in tech. Celebrate your achievements - they are
              the milestones that shape Girlscript's story. You are the pioneers
              for the next wave of tech innovators. I'm thrilled to support your
              journeys as we create a new narrative in technology together.
              Onward and upward!
              <br />
              <br />
              <span style={{ fontSize: "0.9rem" }}>
                Deepesh Garg, Arushi Gandhi, Anshika Goel and GS Rakshak
              </span>
            </p>
            <div style={{ float: "right" }}>
              <Image src="/assets/love.svg" width={80} height={80} />
            </div>
          </Card>
        </Col>
        <Col>
          <Statistic
            title="Registered Users"
            value={userCount}
            // formatter={formatter}
            style={{ margin: "0 2rem", marginBottom: "2rem" }}
          />
          <Statistic
            title="Registered Companies"
            value={startupCount}
            // formatter={formatter}
            style={{ margin: " 0 2rem" }}
          />
        </Col>
      </Row>
    </DashboardLayout>
  );
}

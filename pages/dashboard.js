import { Card, Image } from "antd";
import DashboardLayout from "components/DashboardLayout";
import { useAuth } from "context/AuthUserContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function dashboard() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);
  return (
    <DashboardLayout title="Dashboard">
      <Card title="Founder's Note" className="card" style={{ width: "35%" }}>
        <p style={{ color: "#717171", fontSize: "1.1rem" }}>
          Welcome to Fund Inc. We're so excited that you're coming along with us
          on this journey to democratise private investing.
          <br />
          <br />
          It's truly India's decade for startups! With record number of term
          sheets signed and IPOs held, we can feel the wave of entrepreneurship
          in the country. There are more opportunities in the private market now
          more than ever. With that in mind, we're building this platform to
          enable a marketplace to participate in the private equity market. We
          want to allow everyone with an interest in alternative investments to
          be able to opt in, without the hurdles. We want it to be easier, more
          equitable, more transparent and quicker to raise money as a startup,
          so that founding teams can focus more on building their business.
          <br />
          <br />
          Please keep us in mind as we work towards bringing our vision to you.
          Here's to moving forward! Happy Browsing :)
          <br />
          <br />
          <span style={{ fontSize: "0.9rem" }}>
            ~ Deepesh Garg & Arushi Gandhi
          </span>
        </p>
        <div style={{ float: "right" }}>
          <Image src="/love.svg" width={80} height={80} />
        </div>
      </Card>
    </DashboardLayout>
  );
}

import DashboardLayout from "components/DashboardLayout";
import { useAuth } from "context/AuthUserContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Styles from "../styles/pages/Dashboard.module.scss";

export default function portfolio() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);
  return (
    <DashboardLayout
      title="Portfolio"
      subtitle="View, manage, and track the value of your private company shares and stock options over time."
    >
      <div className={Styles.noneBlock}>
        <p>No stocks, options, or fund investments yet</p>
      </div>
    </DashboardLayout>
  );
}

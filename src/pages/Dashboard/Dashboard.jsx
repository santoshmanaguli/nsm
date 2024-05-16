import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Records from "../../components/Records/Records";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <div className={styles.main}>
          <Breadcrumb></Breadcrumb>
          <Records></Records>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;

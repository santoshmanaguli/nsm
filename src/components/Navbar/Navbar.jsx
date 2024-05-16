import React from "react";
import styles from "./Navbar.module.css";

//images
const logo = new URL("../../assets/müellif-logo.svg", import.meta.url).href;
const dashboard = new URL("../../assets/dashboard.svg", import.meta.url).href;
const collections = new URL("../../assets/collections.svg", import.meta.url)
  .href;
const templates = new URL("../../assets/templates.svg", import.meta.url).href;
const works = new URL("../../assets/works.svg", import.meta.url).href;
const admin = new URL("../../assets/admin-panel.svg", import.meta.url).href;
const reports = new URL("../../assets/reports.svg", import.meta.url).href;
const profileLogo = new URL("../../assets/preview.svg", import.meta.url).href;
const userCard = new URL("../../assets/user-card.png", import.meta.url).href;

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles.logoImg} />
          <div className={styles.title}>Müellif</div>
        </div>
        <div className={styles.navMenu}>
          <div className={styles.logo}>
            <img src={dashboard} alt="Dashboard" />
            <div className={styles.navItems} style={{ color: "grey" }}>
              Dashboard
            </div>
          </div>
          <div className={styles.logo}>
            <img
              src={collections}
              alt="Collections"
              className={`${styles.logoImg} ${styles.collectionLogo}`}
            />
            <div className={styles.navItems}>Collections</div>
          </div>
          <div className={styles.logo}>
            <img src={templates} alt="templates" className={styles.logoImg} />
            <div className={styles.navItems}>Templates</div>
          </div>
          <div className={styles.logo}>
            <img src={works} alt="works" className={styles.logoImg} />
            <div className={styles.navItems}>Works</div>
          </div>
          <div className={styles.logo}>
            <img src={reports} alt="reports" className={styles.logoImg} />
            <div className={styles.navItems}>Reports</div>
          </div>
          <div className={styles.logo}>
            <img src={admin} alt="admin panel" className={styles.logoImg} />
            <div className={styles.navItems}>Admin Panel</div>
          </div>
        </div>
        <div className={styles.profileLogo}>
          <img src={userCard} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

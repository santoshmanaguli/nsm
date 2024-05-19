import React from "react";
import styles from "./Navbar.module.css";
import {
  logo,
  dashboard,
  collections,
  templates,
  works,
  admin,
  reports,
  userCard,
  profileLogo,
} from "../../assets/images";

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
          <div className={`${styles.logo}`}>
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

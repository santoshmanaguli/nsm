import React from "react";
import styles from "./Breadcrumb.module.css";
import {routes} from "../../index";
import { home, right_arrow } from "../../assets/images";

export default function Breadcrumb() {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbContent}>
        <img src={home} alt="home" />
        {routes.map((route, index) => (
          <div key={index} className={styles.routes}>
            {index == routes.length - 1 ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="9.785"
                  viewBox="0 0 5.893 9.785"
                >
                  <path
                    id="Path_39727"
                    data-name="Path 39727"
                    d="M0,3.479,3.478,0,6.957,3.479"
                    transform="translate(4.893 1.414) rotate(90)"
                    fill="none"
                    stroke="#0A0E12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            ) : (
              <img
                className={`${
                  index === routes.length - 1 ? styles.bold : styles.faint
                }`}
                src={right_arrow}
                alt=">"
              />
            )}
            <span
              className={`${
                index === routes.length - 1 ? styles.bold : styles.faint
              }`}
            >
              {route.path}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

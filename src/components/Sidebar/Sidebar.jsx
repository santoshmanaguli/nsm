import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import {
  downArrow,
  upArrow,
  all_template,
  all_template_white,
  contract_template,
  document_template,
  petition_template,
} from "../../assets/images";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContent}>
        <div className={styles.title}>
          <b>Collections</b>
        </div>
        <br />
        <br />
        <br />
        <div
          className={`${styles.collections} cursor-pointer`}
          onClick={toggleContent}
        >
          <b>Firm Collection</b>
          <div className={`${styles.accordianIcon}`}>
            {!isOpen ? (
              <img src={downArrow} alt="" />
            ) : (
              <img src={upArrow} alt="" />
            )}
          </div>
        </div>
        <div>
          {!isOpen && (
            <div className={styles.accordianContent}>
              <div
                className={`${styles.accordianItem} ${styles.selectedAccordianItem}`}
              >
                <img src={all_template_white} alt="template" />
                <div className={styles.accordianItemTitle}>All Templates</div>
              </div>
              <div className={`${styles.accordianItem}`}>
                <img src={contract_template} alt="template" />
                <div className={styles.accordianItemTitle}>
                  Contract Templates
                </div>
              </div>
              <div className={`${styles.accordianItem}`}>
                <img src={document_template} alt="template" />
                <div className={styles.accordianItemTitle}>
                  Document Templates
                </div>
              </div>
              <div className={`${styles.accordianItem}`}>
                <img src={petition_template} alt="template" />
                <div className={styles.accordianItemTitle}>
                  Petition Templates
                </div>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className={`${styles.collections}`}>
          <b>Müellif Collection</b>
          <div className={`${styles.accordianIcon}`}>
            <img src={downArrow} alt="" />
          </div>
        </div>
        <div>
          <div className={styles.accordianContent}>
            <div className={`${styles.accordianItem}`}>
              <img src={all_template} alt="template" />
              <div className={styles.accordianItemTitle}>All Templates</div>
            </div>
            <div className={`${styles.accordianItem}`}>
              <img src={contract_template} alt="template" />
              <div className={styles.accordianItemTitle}>
                Contract Templates
              </div>
            </div>
            <div className={`${styles.accordianItem}`}>
              <img src={document_template} alt="template" />
              <div className={styles.accordianItemTitle}>
                Document Templates
              </div>
            </div>
            <div className={`${styles.accordianItem}`}>
              <img src={petition_template} alt="template" />
              <div className={styles.accordianItemTitle}>
                Petition Templates
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { React, useState } from "react";
import styles from "./Filter.module.css";
import Modal from "../Modal/Modal";
import { filter } from "../../assets/images";



export default function Filter() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.container}>
      <div className={styles.icon} onClick={handleShow}>
        <img src={filter} alt="" />
      </div>

      {/* modal */}
      {/* <div className={styles.filterModal}>
        <Modal isOpen={show} hide={handleClose} />
      </div> */}
    </div>
  );
}

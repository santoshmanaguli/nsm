import { React, useState } from "react";
import styles from "./Filter.module.css";
import Modal from "../Modal/Modal";
import { filter } from "../../assets/images";

export default function Filter({
  data,
  handleSelectChangeId,
  handleSelectChangeName,
  handleSelectChangeType,
  handleFilter,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.container}>
      <div className={`${styles.icon} cursor-pointer`} onClick={handleShow}>
        <img src={filter} alt="" />
      </div>

      {/* modal */}
      <div className={styles.filterModal}>
        <Modal
          isOpen={show}
          hide={handleClose}
          data={data}
          handleSelectChangeId={handleSelectChangeId}
          handleSelectChangeName={handleSelectChangeName}
          handleSelectChangeType={handleSelectChangeType}
          handleFilter={handleFilter}
        />
      </div>
    </div>
  );
}

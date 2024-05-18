import React from "react";
import styles from "../Modal/Modal.module.css";
import { close, filter } from "../../assets/images";
import { id } from "../../index";

export default function Modal({ isOpen, hide }) {
  if (!isOpen) {
    return null; //show not render if not open
  }

  function selectAll() {}

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <div style={{ display: "flex" }}>
            <img src={filter} alt="filter" />
            &nbsp;
            <div className={styles.filterHeader}>
              <b>Filter</b>
            </div>
          </div>
          <div>
            <img src={close} alt="close" className="cursor-pointer" onClick={hide} />
          </div>
        </div>
        <main>
          <div>
            <form>
              <div>
                <label htmlFor="id">
                  <b>ID</b>
                </label>
                <select name="id">
                  <option value="all">
                    <input type="checkbox" onChange={selectAll} />
                    Choose All
                  </option>
                  {id.map((option, index) => {
                    return (
                      <option value={option.name} key={option.id}>
                        <input type="checkbox" />
                        {option.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

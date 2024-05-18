import React from 'react';
import styles from '../Modal/Modal.module.css'

export default function Modal({show, hide}) {
  if (!show) {
    return null //show not render if not open
  }

  return (
    <div className={styles.modalContainer}>
      <div className={modalContent}>
        <button className={styles.btn} onClick={hide}>
          Close
        </button>
      </div>
    </div>
  )
}

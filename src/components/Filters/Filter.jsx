import React from 'react'
import styles from './Filter.module.css'

const filter = new URL("../../assets/filter.svg", import.meta.url).href;


export default function Filter() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src={filter} alt="" />
      </div>


      {/* modal */}
      <div className={styles.filterModal}>
    
      </div>
    </div>
  )
}

import React from "react";
import styles from './Search.module.css'

const search_icon = new URL("../../assets/search.svg", import.meta.url).href;

export default function Search({ onInputChange, search }) {

  function handleChange(e){
    console.log("FUNC");
    onInputChange(e.target.value);
  }
  return (
    <div className={styles.container}>
      <img src={search_icon} alt="search" className={styles.searchIcon} />
      <input
        type="search"
        name="records"
        placeholder="Write something about the template you want to find"
        className={styles.searchRecords}
        onChange={handleChange}
        value={search}
      />
    </div>
  );
}

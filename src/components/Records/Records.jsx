import React, { useState } from "react";
import styles from "./Records.module.css";
import Search from "../Search/Search";

export default function Records() {
  const [search, setSearch] = useState('')
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Search data={search}/>
      </div>
    </div>
  );
}

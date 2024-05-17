import React, { useState, useEffect } from "react";
import styles from "./Records.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTableData } from "../../redux/actions";
import Search from "../Search/Search";
import Filter from "../Filters/Filter";

export default function Records() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tableData);

  //state
  const [search, setSearch] = useState("");

  //functions
  const handleInputChange = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json"); // Adjust path if needed
      console.log(response);
      const data = await response.json();
      console.log(data);
      dispatch(setTableData(data));
    };
    fetchData();
  }, [dispatch]);

  //html
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Search onInputChange={handleInputChange} />
        <Filter></Filter>
      </div>
    </div>
  );
}

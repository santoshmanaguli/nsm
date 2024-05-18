import React, { useState, useEffect } from "react";
import styles from "./Records.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTableData } from "../../redux/actions";
import Search from "../Search/Search";
import Filter from "../Filters/Filter";
import {
  downArrow,
  upArrow,
  unfilled_star,
  star_filled,
  preview,
  copy_url,
  info,
  continue_template,
  left_arrow,
  right_arrow
} from "../../assets/images";

export default function Records() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tableData);

  //state
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  //functions
  const handleInputChange = (data) => {
    setSearch(data);
  };

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json"); // Adjust path if needed
      const data = await response.json();
      dispatch(setTableData(data));
      console.log(tableData);
    };
    fetchData();
  }, [dispatch]);

  //html
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.searchFilter}>
          <Search onInputChange={handleInputChange} />
          <Filter />
        </div>
        <div className={styles.recordFound}>
          <b>{tableData.length}</b> Records Found
        </div>
        <div className={styles.table}>
          <table className={styles.recordTable}>
            <thead>
              <tr className={styles.tableHeader}>
                <th />
                <th />
                <th>
                  ID
                  <img src={downArrow} alt="" style={{ marginLeft: "5px" }} />
                </th>
                <th>
                  Template Name
                  <img src={downArrow} alt="" style={{ marginLeft: "5px" }} />
                </th>
                <th>
                  Model Type
                  <img src={downArrow} alt="" style={{ marginLeft: "5px" }} />
                </th>
                <th>
                  Date/Time
                  <img src={downArrow} alt="" style={{ marginLeft: "5px" }} />
                </th>
                <th>
                  Actions
                  <img src={downArrow} alt="" style={{ marginLeft: "5px" }} />
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => {
                return (
                  <tr key={index} className={styles.tableRow}>
                    <td className={styles.tableData}>
                      {!isOpen ? (
                        <img src={downArrow} alt="" />
                      ) : (
                        <img src={upArrow} alt="" />
                      )}
                    </td>
                    <td className={styles.tableData}>
                      {row.id == "RRM0002" ? (
                        <img src={star_filled} />
                      ) : (
                        <img src={unfilled_star} />
                      )}
                    </td>
                    <td className={styles.tableData}>{row.id}</td>
                    <td className={styles.tableData}>{row.template_name}</td>
                    <td className={styles.tableData}>{row.model_type}</td>
                    <td className={styles.tableData}>{row.date_time}</td>
                    <td className={styles.actionDiv}>
                      <div className={styles.actionBtn}>
                        <img src={preview} alt="preview" />
                      </div>
                      <div className={styles.actionBtn}>
                        <img
                          src={continue_template}
                          alt="continue to template"
                        />
                      </div>
                      <div className={styles.actionBtn}>
                        <img src={info} alt="information" />
                      </div>
                      <div className={styles.actionBtn}>
                        <img src={copy_url} alt="copy url" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <div className={styles.pagination}>
          <div>
            <button type="button" className={styles.pageBtn}>
              <b>10</b> per page
              <img src={downArrow} alt="" />
            </button>
          </div>
          <div style={{display: "flex", gap: "10px"}}>
            <button className={styles.paginationBtn} type="button">
              <img src={left_arrow} alt="" />
            </button>
            <button className={styles.paginationBtn} style={{backgroundColor: "#212626", color: "#FFFFFF"}} type="button">1</button>
            <button className={styles.paginationBtn} type="button">2</button>
            <button className={styles.paginationBtn} type="button">3</button>
            <button className={styles.paginationBtn} type="button"> <img src={right_arrow} alt="" /> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

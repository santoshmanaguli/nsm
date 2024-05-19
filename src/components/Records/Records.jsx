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
  right_arrow,
} from "../../assets/images";

export default function Records() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tableData);

  //state
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [tableData1, setTableData1] = useState(tableData);
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedTempName, setSelectedTempName] = useState([]);

  //functions
  const handleSelectChangeId = (value, isSelected) => {
    const updateOptions = value.map((i) => {
      return i.value;
    });
    const updatedOption1 = updateOptions;
    setSelectedIDs(updatedOption1);
  };

  const handleSelectChangeName = (value, isSelected) => {
    const updateOptions = value.map((i) => {
      return i.value;
    });
    const updatedOption1 = updateOptions;
    setSelectedTempName(updatedOption1);
  };

  const handleSelectChangeType = (value, isSelected) => {
    const updateOptions = value.map((i) => {
      return i.value;
    });
    const updatedOption1 = updateOptions;
    setSelectedModels(updatedOption1);
  };

  const handleInputChange = (query) => {
    setSearch(query.toLowerCase().trim());

    //filtering for search
    const filtered = tableData.filter((i) => {
      const id = i.id;
      const tem_name = i.template_name.toLowerCase();
      const model_type = i.model_type.toLowerCase();
      const date_time = i.date_time;
      return (
        id.includes(query) ||
        tem_name.includes(query) ||
        model_type.includes(query) ||
        date_time.includes(query)
      );
    });

    if (filtered.length == 0 && query == "") {
      setTableData1(tableData);
    } else {
      setTableData1(filtered);
    }
  };

  const handleFilter = (string) => {
    //filtering for search

    const filtered = tableData.filter((i) => {
      const ids = i.id.toLowerCase();
      const tem_name = i.template_name.toLowerCase();
      const model_type = i.model_type.toLowerCase();
      const date_time = i.date_time;
      return (
        selectedIDs.some((id) => ids.includes(id.toLowerCase())) ||
        selectedTempName.some((id) => tem_name.includes(id.toLowerCase())) ||
        selectedModels.some((id) => model_type.includes(id.toLowerCase()))
      );
    });

    if (filtered.length == 0) {
      setTableData1(tableData);
    } else {
      setTableData1(filtered);
    }
  };

  const toggleContent = (toggle, index) => {
    setIsOpen(!toggle);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json"); // Adjust path if needed
      const data = await response.json();
      data.forEach((i) => {
        i.isOpen = false;
      });
      dispatch(setTableData(data));
      setTableData1(data);
      setTimeout(() => {
        console.log(tableData);
      }, 2000);
    };
    fetchData();
  }, [dispatch]);

  //html
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.searchFilter}>
          <Search onInputChange={handleInputChange} search={search} />
          <Filter
            data={tableData}
            handleSelectChangeId={handleSelectChangeId}
            handleSelectChangeName={handleSelectChangeName}
            handleSelectChangeType={handleSelectChangeType}
            handleFilter={handleFilter}
          />
        </div>
        <div className={styles.recordFound}>
          <b>{tableData1.length}</b> Records Found
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
              {tableData1.map((row, index) => {
                return isOpen && row.id == "RRM0002" ? (
                  <tr
                    key={index}
                    className={`${styles.tableRow} btn`}
                    style={{ backgroundColor: "#C3CBD3" }}
                  >
                    <td className={styles.tableData}>
                      <div>
                        {row.id !== "RRM0002" && (
                          <img
                            src={downArrow}
                            alt=""
                            className={`${
                              row.id == "RRM0002" ? "cursor-pointer" : ""
                            }`}
                          />
                        )}

                        {row.id == "RRM0002" ? (
                          <img
                            src={!isOpen ? downArrow : upArrow}
                            alt=""
                            className={`${
                              row.id == "RRM0002" ? "cursor-pointer" : ""
                            }`}
                            onClick={() => toggleContent(isOpen)}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr key={index} className={styles.tableRow}>
                    <td className={styles.tableData}>
                      {row.id !== "RRM0002" && (
                        <img
                          src={downArrow}
                          alt=""
                          className={`${
                            row.id == "RRM0002" ? "cursor-pointer" : ""
                          }`}
                        />
                      )}

                      {row.id == "RRM0002" ? (
                        <img
                          src={!isOpen ? downArrow : upArrow}
                          alt=""
                          className={`${
                            row.id == "RRM0002" ? "cursor-pointer" : ""
                          }`}
                          onClick={() => toggleContent(isOpen)}
                        />
                      ) : (
                        ""
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
                      <div className={`${styles.actionBtn} cursor-pointer`}>
                        <img src={preview} alt="preview" />
                      </div>
                      <div className={`${styles.actionBtn} cursor-pointer`}>
                        <img
                          src={continue_template}
                          alt="continue to template"
                        />
                      </div>
                      <div className={`${styles.actionBtn} cursor-pointer`}>
                        <img src={info} alt="information" />
                      </div>
                      <div className={`${styles.actionBtn} cursor-pointer`}>
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
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className={`${styles.paginationBtn} cursor-pointer`}
              type="button"
            >
              <img src={left_arrow} alt="" />
            </button>
            <button
              className={`${styles.paginationBtn} cursor-pointer`}
              style={{ backgroundColor: "#212626", color: "#FFFFFF" }}
              type="button"
            >
              1
            </button>
            <button
              className={`${styles.paginationBtn} cursor-pointer`}
              type="button"
            >
              2
            </button>
            <button
              className={`${styles.paginationBtn} cursor-pointer`}
              type="button"
            >
              3
            </button>
            <button
              className={`${styles.paginationBtn} cursor-pointer`}
              type="button"
            >
              {" "}
              <img src={right_arrow} alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

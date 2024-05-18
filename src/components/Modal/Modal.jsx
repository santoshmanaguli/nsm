import React, { useState } from "react";
import styles from "../Modal/Modal.module.css";
import { close, filter } from "../../assets/images";
import Select from "react-select";

export default function Modal({ isOpen, hide, data }) {
  if (!isOpen) {
    return null; //show not render if not open
  }

  //
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedTempName, setSelectedTempName] = useState([]);

  const ids = data.map((table, index) => {
    return { label: table.id, value: table.id };
  });

  const template_name = data.map((i, index) => {
    return {label: i.template_name,value: i.template_name }
  })

  const mdl_type = data.map((i, index) => {
    return {label: i.model_type,value: i.model_type }
  })


  const handleSelectChange = (value, isSelected) => {
    console.log(value, isSelected);
    const updatedOptions = ids.map(i => {
      if (i.value === value) {
        return { ...i, isSelected };
      }
      return i;
    });
    setSelectedIDs(updatedOptions.filter(option => option.isSelected).map(option => option.value));
    console.log(selectedIDs);
  };

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
            <img
              src={close}
              alt="close"
              className="cursor-pointer"
              onClick={hide}
            />
          </div>
        </div>
        <main>
          <div className={styles.form}>
            <div className={styles.templateId}>
              <div className={styles.selectDiv}>
                <label htmlFor="id">
                  <b>ID</b>
                </label>
                <Select
                  isMulti
                  name="id"
                  options={ids}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isClearable={false}
                  placeholder="Choose"
                  onChange={handleSelectChange}
                />
              </div>
              <div className={styles.selectDiv}>
                <label htmlFor="template_name">
                  <b>Template Name</b>
                </label>
                <Select
                  isMulti
                  name="template_name"
                  options={template_name}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Choose"
                  isClearable={false}
                  style={{marginTop: "10px"}}
                />
              </div>
            </div>
            <div className={styles.modelTypeSelect}>
              <label htmlFor="model_type">
                <b>Model Type</b>
              </label>
              <Select
                isMulti
                name="model_type"
                options={mdl_type}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Choose"
                isClearable={false}
              />
            </div>
          </div>
          <div className={styles.preferenceTheme}>
            <div className={styles.selectDiv}>
              <label htmlFor="modal_usage">
                <b>Modal Usage Preferences</b>
              </label>
              <Select
                isMulti
                name="modal_usage"
                options={ids}
                className="basic-multi-select"
                classNamePrefix="select"
                isClearable={false}
                placeholder="Choose"
              />
            </div>
            <div className={styles.selectDiv}>
              <label htmlFor="sectoral_theme">
                <b>Sectoral Theme</b>
              </label>
              <Select
                isMulti
                name="sectoral_theme"
                options={ids}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Choose"
                isClearable={false}
              />
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <div>
            <button type="button" className={styles.clearFilter}>
              Clear Filter
            </button>
          </div>
          <div className={styles.applyDiv}>
            <button type="button" className={`${styles.cancelbtn} cursor-pointer`} onClick={hide}>
              Cancel
            </button>
            <button type="button" className={`${styles.applybtn} cursor-pointer`}>
              Apply
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

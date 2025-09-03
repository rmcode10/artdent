"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Select.module.scss";

const Select = ({ options, label, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (val, event) => {
    event.stopPropagation();
    onChange(val);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((option) => option.value === value?.value)?.label ||
    "Selectează...";

  return (
    <div className={styles.wrapper} ref={selectRef}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={`${styles.select} ${open ? styles.open : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className={styles.selectedValue}>
          {selectedLabel}
          <span className={styles.arrow}>&#9662;</span>
        </div>
        {open && (
          <ul className={styles.options}>
            {options.map((option) => (
              <li
                key={option.value}
                className={`${styles.option} ${
                  option.value === value?.value ? styles.selected : ""
                }`}
                onClick={(event) => handleSelect(option, event)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;

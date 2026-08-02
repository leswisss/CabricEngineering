"use client";

import React, { useState } from "react";
import styles from "../../styles/ReUsables/dropinput.module.scss";

interface DataProps {
  id: number;
  order: number;
  label: string;
  error: string;
  options: {
    id: string;
    name: string;
  }[];
}

const DropInput = ({ data }: { data: DataProps }) => {
  const [selected, setSelected] = useState("");
  const [dropText, setdropText] = useState("Select");

  return (
    <div className={styles.input__wrap}>
      <span className={styles.label}>{data.label}</span>
      <div className={styles.drop__wrap}>
        <div className={styles.drop__box}>
          <span>Select</span>
        </div>
        <div className={styles.dropdown}></div>
      </div>
      <span className={styles.error}></span>
    </div>
  );
};

export default DropInput;

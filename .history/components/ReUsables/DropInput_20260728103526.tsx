"use client";

import React, { useState } from "react";
import Chevron from "@/utils/Icons/Chevron";
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
          <div className={styles.innerr}>
            <span className={styles.spanner}>{dropText}</span>
            <span className={styles.svg}>
              <Chevron />
            </span>
          </div>
        </div>
        <div className={styles.dropdown}>
          {data.options.map((option, i) => (
            <div
              className={styles.option}
              key={i}
              onClick={() => {
                setSelected(option.id);
                setdropText(option.name);
              }}
            >
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      </div>
      <span className={styles.error}></span>
    </div>
  );
};

export default DropInput;

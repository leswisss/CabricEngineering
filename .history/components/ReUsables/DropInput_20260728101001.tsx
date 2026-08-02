import React from "react";
import styles from "../../styles/ReUsables/dropinput.module.scss";

const DropInput = () => {
  return (
    <div className={styles.input__wrap}>
      <span className={styles.label}></span>
      <div className={styles.}>

      </div>
      <span className={styles.error}></span>
    </div>
  );
};

export default DropInput;

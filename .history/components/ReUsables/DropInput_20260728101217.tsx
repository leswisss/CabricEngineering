import React from "react";
import styles from "../../styles/ReUsables/dropinput.module.scss";

interface DataProps {
  id: number,
      order: number,
      label: string,
      error: "Please select a location type.",
      options: [
        {
          id: "urb",
          name: t("urb"),
        },
        {
          id: "surb",
          name: "surb",
        },
        {
          id: "rural",
          name: t("rural"),
        },
      ],
}

const DropInput = ({data}: {data: }) => {
  return (
    <div className={styles.input__wrap}>
      <span className={styles.label}></span>
      <div className={styles.dropdown}>
        <div className={styles.drop__section}>

        </div>
      </div>
      <span className={styles.error}></span>
    </div>
  );
};

export default DropInput;

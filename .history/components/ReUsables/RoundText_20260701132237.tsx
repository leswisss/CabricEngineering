import React from "react";
import styles from "../../styles/ReUsables/roundtext.module.scss";

const RoundText = ({ color, text }: { color: string, text: string }) => {
  return <div className={styles.roundtext}>
    <div className={styles.round}>

    </div>
    <p></p>
  </div>;
};

export default RoundText;

import React from "react";
import styles from "../../styles/ReUsables/roundtext.module.scss";

const RoundText = ({ color, text }: { color: string; text: string }) => {
  return (
    <div className={styles.roundtext}>
      <div className={styles.round} style={{backgroundColor:}}></div>
      <p>{text}</p>
    </div>
  );
};

export default RoundText;

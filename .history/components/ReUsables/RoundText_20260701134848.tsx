import React from "react";
import styles from "../../styles/ReUsables/roundtext.module.scss";

const RoundText = ({ color, text }: { color: string; text: string }) => {
  return (
    <div className={styles.roundtext}>
      <div className={styles.round} style={{backgroundColor: color}}></div>
      <p className={styles.ptext} style={{backgroundColor: color}}>{text}</p>
    </div>
  );
};

export default RoundText;

import React from "react";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({
  text,
  backColor,
  hbackColor,
  textColor,
  thColor,
}: {
  text: string;
  backColor: string;
  hbackColor: string;
  textColor: string;
  thColor: string;
}) => {
  const buttonStyle = {
    "--background": backColor,
    "--backhover": hbackColor,
    "--color": textColor,
    "--colorhover": thColor,
  } as React.CSSProperties;

  return (
    <div className={styles.button__wrapper} style={buttonStyle}>
      <p className={styles.b}>{text}</p>
      <div className={styles.round__border}>
        <div className={styles.round__inner}>

        </div>
      </div>
    </div>
  );
};

export default Button;

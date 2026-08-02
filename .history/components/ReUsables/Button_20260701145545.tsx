import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({
  text,
  backColor,
  hbackColor,
  textColor,
  thColor,
  link
}: {
  text: string;
  backColor: string;
  hbackColor: string;
  textColor: string;
  thColor: string;
  link: string
}) => {
  const buttonStyle = {
    "--background": backColor,
    "--backhover": hbackColor,
    "--color": textColor,
    "--colorhover": thColor,
  } as React.CSSProperties;

  return (
    <Link href={link} className={styles.button__wrapper} style={buttonStyle}>
      <p className={styles.btext}>{text}</p>
      <div className={styles.round__border}>
        <div className={styles.round__inner}>

        </div>
      </div>
    </Link>
  );
};

export default Button;

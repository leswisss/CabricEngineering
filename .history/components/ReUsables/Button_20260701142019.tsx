import React from 'react'
import styles from "../../styles/ReUsables/button.module.scss"

const Button = ({text}: {text: string}) => {
  return (
    <div className={styles.button__wrapper}>
      <p>{text}</p>
    </div>
  )
}

export default Button
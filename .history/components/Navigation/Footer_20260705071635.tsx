import React from 'react'
import Background from '@/utils/Icons/Background'
import styles from "../../styles/Navigation/footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.background}>
        <Background/>
      </div>
      <div className={`container ${styles.foot__container}`}>

      </div>
    </footer>
  )
}

export default Footer
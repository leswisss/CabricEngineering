import React from 'react'
import RoundText from '../ReUsables/RoundText'
import Cameroon from '@/utils/Icons/Cameroon'
import France from '@/utils/Icons/France'
import styles from "../../styles/ContactPage/contactcountries.module.scss"

const ContactCountries = () => {
  return (
    <div className={styles.cc__section}>
      <div className={`container ${styles.cc__container}`}>
        <div className={styles.cc__left}>
          <RoundText text=''/>
        </div>
        <div className={styles.cc__right}>

        </div>
      </div>
    </div>
  )
}

export default ContactCountries
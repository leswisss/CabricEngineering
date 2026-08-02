import { StaticImageData } from 'next/image'
import React from 'react'
import styles from "../../styles/ReUsables/heroreusable.module.scss"

const HeroReusable = ({image, text, header}: {image: StaticImageData, text: string, header: string}) => {
  return (
    <div className={styles.hero__wrapper}>
      <div className={styles.hero__image}>

      </div>
    </div>
  )
}

export default HeroReusable
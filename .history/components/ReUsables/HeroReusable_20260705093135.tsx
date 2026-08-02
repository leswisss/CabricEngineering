import { StaticImageData } from 'next/image'
import React from 'react'
import styles from "../../"

const HeroReusable = ({image, text, header}: {image: StaticImageData, text: string, header: string}) => {
  return (
    <div className={styles}>

    </div>
  )
}

export default HeroReusable
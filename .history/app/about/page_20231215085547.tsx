"use client";

import React, {useState} from 'react'
import { AboutHero, AboutAbout, AboutServices, AboutTeam, AboutAccolades, Preloader } from '@/components'

const AboutPage = () => {
  const [onComplete1, setOnComplete1] = useState(false);
  const [onComplete2, setOnComplete2] = useState(false);
  return (
    <>
      <AboutHero />
      <AboutAbout />
      <AboutServices />
      <AboutTeam />
      {/* <AboutAccolades /> */}
    </>
  )
}

export default AboutPage
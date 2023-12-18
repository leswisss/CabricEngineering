"use client";

import React, {useState} from 'react'
import { AboutHero, AboutAbout, AboutServices, AboutTeam, AboutAccolades, Preloader } from '@/components'

const AboutPage = () => {

  const [onComplete2, setOnComplete2] = useState(false);
  return (
    <>{!onComplete2 && <Preloader  onComplete2={onComplete2}  setOnComplete2={setOnComplete2} />}
      <AboutHero />
      <AboutAbout />
      <AboutServices />
      <AboutTeam />
      {/* <AboutAccolades /> */}
    </>
  )
}

export default AboutPage
"use client";

import React, {useState} from 'react'
import { AboutHero, AboutAbout, AboutServices, AboutTeam, AboutAccolades, Preloader } from '@/components'

const AboutPageWrapper = () => {
  const [onComplete1, setOnComplete1] = useState(false);
  const [onComplete2, setOnComplete2] = useState(false);
  return (
    <>
    {!onComplete2 && <Preloader onComplete1={onComplete1} setOnComplete1={setOnComplete1} onComplete2={onComplete2} setOnComplete2={setOnComplete2}/>}
      <AboutHero />
      <AboutAbout />
      <AboutServices />
      <AboutTeam />
      {/* <AboutAccolades /> */}
    </>
  )
}

export default AboutPageWrapper
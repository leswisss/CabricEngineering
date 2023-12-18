import React from 'react'
import { AboutHero, AboutAbout, AboutServices, AboutTeam, AboutAccolades, Preloader } from '@/components'

const AboutPage = () => {
  return (
    <>{!onComplete2 && <Preloader onComplete1={onComplete1} onComplete2={onComplete2} setOnComplete1={setOnComplete1} setOnComplete2={setOnComplete2} isInitial={isFirstVisit} />}
      <AboutHero />
      <AboutAbout />
      <AboutServices />
      <AboutTeam />
      {/* <AboutAccolades /> */}
    </>
  )
}

export default AboutPage
import React from 'react'
import {Preloader{} from '@/components'
import { HomeHero, AboutHome, PathofProgress, HomeServices, HomePortfolio, HomeTeam, HomeAwards, Testimonials } from '@/components'

const HomePage = () => {
  return (
    <div className="main">
      <HomeHero/>
      <AboutHome/>
      <PathofProgress/>
      <HomeServices/>
      <HomePortfolio/>
      <HomeTeam/>
      {/* <HomeAwards/> */}
      <Testimonials/>
    </div>
  )
}

export default HomePage



"use client";

import React, {useState, useRef} from 'react'
import { sidebarcontent } from '@/utils'

const SideNavigation = () => {
  const [activeLink, setActiveLink] = useState(-1)

  return (
    <div className='sidebar__content'>
      <div className="side__image"></div>
    </div>
  )
}

export default SideNavigation
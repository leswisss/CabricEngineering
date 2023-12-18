"use client";

import React, {useState, useRef} from 'react'
import Image from 'next/image';
import { sidebarcontent } from '@/utils'

const SideNavigation = () => {
  const [activeLink, setActiveLink] = useState(-1)

  return (
    <div className='sidebar__content'>
      <div className="side__image">
        <Image src={} fill quality={100} sizes=''/>
      </div>
    </div>
  )
}

export default SideNavigation
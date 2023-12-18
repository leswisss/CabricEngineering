"use client";

import React, {useState, useRef} from 'react'
import Image from 'next/image';
import { sidebarcontent } from '@/utils'

const SideNavigation = () => {
  const [activeLink, setActiveLink] = useState(0)

  return (
    <div className='sidebar__content'>
      <div className="side__image">
        <Image src={sidebarcontent[activeLink].} fill quality={100} sizes='100%'/>
      </div>
    </div>
  )
}

export default SideNavigation
"use client";

import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { sidebarcontent } from '@/utils'
import { sideBarProps } from '@/types';


const SideNavigation = ({setActiveSide}: sideBarProps) => {
  const [activeLink, setActiveLink] = useState(0)

  return (
    <div className='sidebar__content'>
      <div className="side__image">
        <Image src={sidebarcontent[activeLink].image} fill quality={100} sizes='100%' alt={sidebarcontent[activeLink].name}/>
      </div>
      <div className="s-links__container">
        {
          sidebarcontent.map((link, i) => (
            <Link href={link.href} key={`sl${i}`} onMouseOver={() => setActiveLink(i)} onMouseOut={() => setActiveLink(0)} onClick={()}>{link.name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default SideNavigation
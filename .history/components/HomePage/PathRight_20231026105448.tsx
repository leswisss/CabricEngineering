import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/path1.jpg";

const PathRight = () => {
  return (
    <>
      <div className="path__image">
              <Image
                src={IMAGE}
                fill
                quality={100}
                alt="Our Goal"
                sizes="(max-width: 600px) 100%, 100%"
              />
            </div>
            <div className="path__content">
              <span className="pc-title">OUR GOAL</span>
              <span className="pc-text">
                Our foremost goal is to revolutionize the world of architecture
                and construction by embracing a holistic approach that marries
                sustainability, innovation, aesthetics and resilience.
              </span>
            </div>
    </>
  )
}

export default PathRight
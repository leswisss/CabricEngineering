import React from 'react'
import Image from 'next/image'
import WOMAN from "../../public/images/wo"
import "../../styles/ProjectPage/ProjectDetails.scss"

const ProjectDetails = () => {
  return (
    <section className="project__details">
      <div className="container pro-d__container">
        <div className="ninety">
          <div className="prod__top">
            <div className="prodt__overflow">
              <span>PROJECT DETAILS</span>
            </div>
            <div className="prodt__right">
              <div className="prodt__overflow">
                <p>The Urban Oasis spans an area of 400 square meters and comprises residential apartments, office spaces, retail outlets and parking spots.
                  The residential apartments offer a stunning city view and are equiped with modern amenities for comfortable living.
                </p>
              </div>
              <div className="prodt__overflow">
              <p>The Urban Oasis spans an area of 400 square meters and comprises residential apartments, office spaces, retail outlets and parking spots.
                  The residential apartments offer a stunning city view and are equiped with modern amenities for comfortable living.
                </p>
              </div>
            </div>
          </div>
          <div className="prod__bottom">

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails
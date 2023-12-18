"use client";

import React, {useRef, use} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import WOMAN from "../../public/images/woman.jpg";
import { Icon } from "@iconify/react";
import "../../styles/ProjectPage/ProjectDetails.scss";

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
                <p>
                  The Urban Oasis spans an area of 400 square meters and
                  comprises residential apartments, office spaces, retail
                  outlets and parking spots. The residential apartments offer a
                  stunning city view and are equiped with modern amenities for
                  comfortable living.
                </p>
              </div>
              <div className="prodt__overflow">
                <p>
                  The Urban Oasis spans an area of 400 square meters and
                  comprises residential apartments, office spaces, retail
                  outlets and parking spots. The residential apartments offer a
                  stunning city view and are equiped with modern amenities for
                  comfortable living.
                </p>
              </div>
            </div>
          </div>
          <div className="prod__bottom">
            <div className="prodb__left">
              <div className="prodb__image">
                <Image
                  src={WOMAN}
                  alt="Testimonial"
                  quality={100}
                  fill
                  sizes="(max-width: 600px) 100%, 100%"
                />
              </div>
              <Icon icon="ri:double-quotes-l" />
            </div>
            <div className="prodb__right">
              <div className="prodb__overflow">
                <span>
                  The Urban Oasis spans an area of 400 square meters and
                  comprises residential apartments, office spaces, retail
                  outlets and parking spots.
                </span>
              </div>
              <div className="prodb__overflow">
                <p>
                  The Urban Oasis spans an area of 400 square meters and
                  comprises residential apartments, office spaces, retail
                  outlets and parking spots. The residential apartments offer a
                  stunning city view and are equiped with modern amenities for
                  comfortable living.
                </p>
              </div>
              <div className="prodb__overflow">
                <span className="testi__client">CHE SARAH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

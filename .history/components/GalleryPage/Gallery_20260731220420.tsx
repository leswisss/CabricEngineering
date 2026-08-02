import React from "react";
import Image from "next/image";
import IMAGER from "../../public/images/033.jpg";
import IMAGE from "../../public/images/DONE_9 - Photo.jpg";
import IMAGE2 from "../../public/images/05.jpg";
import IMAGE3 from "../../public/images/03.jpg";
import IMAGE4 from "../../public/images/023.jpg";
import styles from "../../styles/AboutPage/gallery.module.scss";
import { Gallery as Galleria } from "@/utils/type";

const Gallery = ({ gallery }: { gallery: Galleria[] }) => {
  const galleryContent = [
    {
      image: IMAGER,
    },
    {
      image: IMAGE,
    },
    {
      image: IMAGE2,
    },
    {
      image: IMAGE3,
    },
    {
      image: IMAGE4,
    },
    {
      image: IMAGER,
    },
  ];

  return (
    <div className={styles.gallery}>
      <div className={`container ${styles.gal__container}`}>
        {gallery.map((data, i) => (
          <div className={styles.gal__image} key={i}>
            <Image
              alt={
                data.image.alt
                  ? project.mainimage.alt
                  : `CaBric Engineering - ${project.name} - Architecture Project`
              }
              fill
              quality={100}
              src={
                urlFor(project.mainimage).width(1920).url() ||
                urlFor(project.mainimage).url()
              }
              sizes="(max-width: 750px) 100vw, 60vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import IMAGE4 from "../../public/images/023.jpg";
import styles from "../../styles/AboutPage/gallery.module.scss";
import { Gallery as Galleria } from "@/utils/type";

const Gallery = ({ gallery }: { gallery: Galleria[] }) => {
  return (
    <div className={styles.gallery}>
      <div className={`container ${styles.gal__container}`}>
        {gallery.map((data, i) => (
          <div className={styles.gal__image} key={i}>
            <Image
              alt={
                data.image.alt
                  ? data.image.alt
                  : `CaBric Engineering - Architecture Project`
              }
              fill
              quality={100}
              src={
                urlFor(data.image).width(1920).url() || urlFor(data.image).url()
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

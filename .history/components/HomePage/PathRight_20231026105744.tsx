import React from "react";
import Image from "next/image";

const PathRight = () => {
  return (
    <div className="pc-1">
              <div className="path__image">
                <Image
                  src={IMAGE2}
                  fill
                  quality={100}
                  alt="Our Goal"
                  sizes="(max-width: 600px) 100%, 100%"
                />
              </div>
              <div className="path__content">
                <span className="pc-title">MISSION</span>
                <span className="pc-text">
                  Our commitment to eco-friendly practices is at the heart of our mission.
                </span>
              </div>
            </div>
  );
};

export default PathRight;

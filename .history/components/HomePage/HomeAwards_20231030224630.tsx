import React from "react";
import "../../styles/HomePage/HomeAwards.scss";
import AwardsSlide from "./AwardsSlide";
import ".."

const HomeAwards = () => {
  return (
    <section className="home__awards">
      <div className="container awards__container">
        <div className="ha__top">
          <span>ACCOLADES</span>
          <span>AWARDS AND RECOGNITION</span>
        </div>
        <div className="ha__bottom">
          <AwardsSlide/>
        </div>
      </div>
    </section>
  );
};

export default HomeAwards;

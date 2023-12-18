import React from 'react'
import AwardsSlide from "./AwardsSlide";
import { AwardsData } from "@/utils";

const AwardContent = () => {
  return (
    <div>
      {
            AwardsData.map(( data, i) => (
              <AwardsSlide key={`ad-${i}`} data={data}/>
            ))
          }
    </div>
  )
}

export default AwardContent
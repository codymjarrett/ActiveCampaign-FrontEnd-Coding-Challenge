import React from "react"

import CallToAction from "./CallToAction"

const Card = ({ contributors }) => (
  <div className="card">
    <p className="card__annoucement">
      Only four days left to fund this project
    </p>
    {contributors < 1 ? (
      <p className="card__detail">Be the first to support this project!</p>
    ) : (
      <p className="card__detail">
        Join the <span className="text-hightlight-black">{contributors}</span>{" "}
        other donor{contributors > 1 ? "s" : ""} who have already supported this
        project.
      </p>
    )}
    <CallToAction />
  </div>
)

export default Card

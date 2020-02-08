import React, { useContext } from "react"
import { AppContext } from "../context"
import CallToAction from "./CallToAction"

const Card = () => {
  const { state } = useContext(AppContext)

  return (
    <div className="card">
      <p className="card__annoucement">
        Only four days left to fund this project
      </p>
      {state.contributors < 1 ? (
        <p className="card__detail">Be the first to support this project!</p>
      ) : (
        <p className="card__detail">
          Join the{" "}
          <span className="text-hightlight-black">{state.contributors}</span>{" "}
          other donor{state.contributors > 1 ? "s" : ""} who have already
          supported this project.
        </p>
      )}
      {state.responseState === "success" ? (
        <div className="success-message">
          Thank you so much for your contribution of $
          {state.donation.toFixed(2)}!
        </div>
      ) : null}
      {state.responseState === "number-less-than-five" ? (
        <div className="error-message">Please provide a number greater than 5</div>
      ) : null}
      {state.responseState === "should-be-number" ? (
        <div className="error-message">Input should only include numbers</div>
      ) : null}

      <CallToAction />
    </div>
  )
}

export default Card

import React, { useContext, useEffect } from "react"
import { AppContext } from "../context"

const Donation = () => {
  const { state } = useContext(AppContext)
  useEffect(() => {}, [state])
  return (
    <div className="donation">
      {state.progress <= 0 ? (
        <p className="congratulations">
          Congratulations, You've Met Your Goal!{" "}
          <span role="img" aria-label="party">
            🎉🎉🎉🎉
          </span>
        </p>
      ) : (
        <p>
          <span className="remaining-amount">
            ${state.progress.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </span>{" "}
          still needed to fund this project
        </p>
      )}
    </div>
  )
}

export default Donation

import React, { useContext } from "react"
import { AppContext } from "../context"


const ProgressBar = () => {
  const { state } = useContext(AppContext)

  const handleHover = () => {
    document.querySelector('.tooltip').classList.toggle('show')
  }

  return (
    <div className="progress-bar" aria-hidden="true" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div
        className="progress-bar__progress"
        style={{ width: `${state.percentageReached}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar

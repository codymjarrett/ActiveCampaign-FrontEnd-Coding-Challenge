import React, { useContext } from "react"
import { AppContext } from "../context"

const ProgressBar = () => {
  const { state, dispatch } = useContext(AppContext)

  return (
    <div className="progress-bar" aria-hidden="true">
      <div
        className="progress-bar__progress"
        style={{ width: `${state.percentageReached}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar

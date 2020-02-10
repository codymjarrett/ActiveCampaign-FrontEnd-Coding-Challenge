import React, { useContext } from "react"
import { AppContext } from "../context"

const ToolTip = () => {
  const { state } = useContext(AppContext)

  return (
    <div
      className="tooltip"
      style={{
        left:
          `${state.percentageReached}` < 100
            ? `calc(${state.percentageReached}% - 42px)`
            : `calc(100% - 42px)`,
      }}
    >
      <p className="tooltip__detail">{state.percentageReached}%</p>
    </div>
  )
}

export default ToolTip

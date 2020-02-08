import React, { useState, useContext } from "react"
import { AppContext } from "../context"
import {
  CALCULATE_PROGRESS,
  INCREASE_CONTRIBUTORS,
  ADD_DONATION,
  SET_RESPONSE_STATE,
  CALCULATE_TOTAL_DONATIONS,
} from "../constants"

const validateCurrencyInput = value => {
  return value.match(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/)
}

const CallToAction = () => {
  const { state, dispatch } = useContext(AppContext)
  const [inputValue, setInputValue] = useState("")

  const handleOnChange = event => {
    const {
      currentTarget: { value },
    } = event

    setInputValue(value)
  }

  const handleButton = event => {
    if (event.key === "Enter" || event.type === "click") {
      if (inputValue.search(/[A-Za-z]/) > -1) {
        dispatch({ type: SET_RESPONSE_STATE, payload: "should-be-number" })
      }
      if (Number(inputValue) < 5) {
        dispatch({ type: SET_RESPONSE_STATE, payload: "number-less-than-five" })
      }

      if (validateCurrencyInput(inputValue) && Number(inputValue) > 5) {
        dispatch({
          type: CALCULATE_PROGRESS,
          payload: state.progress - Number(inputValue),
        })
        dispatch({
          type: INCREASE_CONTRIBUTORS,
          payload: state.contributors + 1,
        })
        dispatch({
          type: CALCULATE_TOTAL_DONATIONS,
          payload: Number(inputValue),
        })
        dispatch({
          type: ADD_DONATION,
          payload: Number(inputValue),
        })
        dispatch({ type: SET_RESPONSE_STATE, payload: "success" })
      }

      setInputValue("")
    }
  }

  return (
    <div className="call-to-action">
      {state.progress > 0 ? (
        <div className="call-to-action__wrapper">
          <div className="donation-input__wrapper">
            <input
              className="donation-input"
              type="text"
              onChange={handleOnChange}
              value={inputValue}
              onKeyPress={e => handleButton(e)}
            />
          </div>
          <div className="donation-button__wrapper">
            <button className="donation-button" onClick={e => handleButton(e)}>
              GIVE NOW
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default CallToAction

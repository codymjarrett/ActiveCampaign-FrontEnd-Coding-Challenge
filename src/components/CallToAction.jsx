import React, { useState } from "react"

const validateCurrencyInput = value => {
  return value.match(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/)
}

const CallToAction = () => {
  const [shouldButtonBeDisabled, setShouldButtonBeDisable] = useState(true)
  const [error, setError] = useState(false)

  const handleOnChange = event => {
    const {
      currentTarget: { value },
    } = event

    if(value === "" || value.search(/[A-Za-z]/) > -1) setShouldButtonBeDisable(true)
    if (validateCurrencyInput(value)) setShouldButtonBeDisable(false)
  }

  return (
    <div className="call-to-action">
      <div className={`call-to-action__wrapper ${error ? "error" : ""}`}>
        <div className="donation-input__wrapper">
          <input
            className="donation-input"
            type="text"
            onChange={handleOnChange}
          />
        </div>
        <div className="donation-button__wrapper">
          <button
            className={`donation-button ${
              shouldButtonBeDisabled ? "disabled" : ""
            }`}
            disabled={shouldButtonBeDisabled}
          >
            GIVE NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction

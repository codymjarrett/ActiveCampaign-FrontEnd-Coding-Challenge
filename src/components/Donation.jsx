import React from "react"

const Donation = ({ goal }) => (
  <div className="donation">
    <p>
      <span className="remaining-amount">
        ${goal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
      </span>{" "}
      still needed to fund this project
    </p>
  </div>
)

export default Donation

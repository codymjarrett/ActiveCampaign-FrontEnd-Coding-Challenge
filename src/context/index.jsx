import React, { createContext, useReducer } from "react"

const initialState = {
  goal: 5000,
  progress: 5000,
  donation: 0,
  totalDonations: 0,
  percentageReached: 0,
  contributors: 0,
  responseState: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "CALCULATE_PROGRESS":
      return {
        ...state,
        progress: action.payload,
      }
    case "INCREASE_CONTRIBUTORS":
      return {
        ...state,
        contributors: action.payload,
      }
    case "ADD_DONATION":
      return {
        ...state,
        percentageReached: (state.totalDonations / state.goal) * 100,
        donation: action.payload,
      }
    case "CALCULATE_PERCENTAGE":
      return {
        ...state,
        percentageReached: action.payload,
      }
    case "CALCULATE_TOTAL_DONATIONS":
      return {
        ...state,
        totalDonations: state.totalDonations + action.payload,
      }
    case "SET_RESPONSE_STATE":
      return {
        ...state,
        responseState: action.payload,
      }
    default:
      return state
  }
}

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

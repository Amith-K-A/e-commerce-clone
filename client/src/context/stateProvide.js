import React, { createContext, useContext, useReducer } from "react";

//prepare the data layer
export const StateContext = createContext();

// Wrap Our app and Provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

//Pull information from the the data layer
export const useStateValue = () => useContext(StateContext);
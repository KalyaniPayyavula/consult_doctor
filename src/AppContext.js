import React, { createContext, useReducer } from "react";

const AppContext = createContext();

let initialState = { doctorList: [] };

let reducer = (state, action) => {
  switch (action.type) {
    case "setDoctorList":
      return { ...state, doctorList: action.doctorList };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

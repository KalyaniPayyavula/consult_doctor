import { combineReducers } from "redux";
import * as doctorReducer from "./doctor_reducer";
import * as loginReducer from "./login_reducer";
import * as appointmentReducer from "./appointment_reducer";

const appReducer = combineReducers(
  Object.assign(doctorReducer, loginReducer, appointmentReducer)
);

export default function(state, action) {
  if (action.type === "CLEAR_REDUX_STORE") {
    state = { login: { loginError: state.login.loginError }, nav: state.nav };
  }
  return appReducer(state, action);
}

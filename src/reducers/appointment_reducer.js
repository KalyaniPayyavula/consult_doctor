import * as types from "../actions/action_types";

export function appointmentReducer(state = { appointment: {} }, action) {
  switch (action.type) {
    case types.SET_APPOINTMENT_DETAILS:
      return { ...state, appointment: action.appointmentDetails };
    default:
      return state;
  }
}

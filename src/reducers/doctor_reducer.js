import * as types from "../actions/action_types";

export function doctorReducer(state = { doctorList: [] }, action) {
  switch (action.type) {
    case types.SET_DOCTOR_DETAILS:
      return { ...state, doctorList: action.doctorList };
    default:
      return state;
  }
}

import * as types from "../actions/action_types";

/*
 Successful login should have details like
 userType : 'string' // Patient or Doctor
 userProfile : { userName,}

 If it is doctor
 //Details of doctor appointments.
*/

export function loginReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case types.SET_AUTH_STATE:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
}

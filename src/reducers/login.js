import * as types from "../actions/actionTypes";
import axios from "axios";
var initialState = {
  email: "",
  password: "",
  checkLogin: false
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
        state.email= action.state.email
        state.password= action.state.password
        state.checkLogin= true
      return {
        ...state,
        
      };
    case types.SIGNUP:
      alert("Sign Up Successfully");
      break;
    default:
      return state;
  }
};
export default myReducer;

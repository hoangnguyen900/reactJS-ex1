import * as types from "./actionTypes";
import axios from "axios";

export const login = state => {
  return {
    type: types.LOGIN,
    state
  };
};
export const signUp = state => {
  return {
    type: types.SIGNUP,
    state
  };
};
export const loginAPI = state => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "https://terralogic-training.firebaseapp.com/api/login",
      data: state
    })
      .then(res => {
        console.log('hello',res);
        dispatch(login(state));
      })
      .catch(er => {
        console.log(er);
      });
  };
};
export const signUpAPI = state => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "https://terralogic-training.firebaseapp.com/api/sign_up",
      data: state
    })
      .then(res => {
        console.log(res);
        dispatch(signUp(state));
      })
      .catch(er => {
        console.log(er);
      });
  };
};

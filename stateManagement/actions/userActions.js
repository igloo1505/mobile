import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_LOADING,
} from "./Types";
import Axios from "axios";
import { AppConstants } from "../../constants/appLevelConstants";

const { serverRoot } = AppConstants;
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const loginUser = (user) => async (dispatch) => {
  try {
    console.log("Running loginUser...");
    const res = await Axios.post(`${serverRoot}/authenticate`, user, config);
    // console.log("res: ", res);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("Caught Error:", error);
    dispatch({ type: LOGIN_FAIL, payload: error.response });
  }
};

export const registerUser = (user) => async (dispatch) => {
  try {
    console.log("Running register User...")
      const res = await Axios.post(`${serverRoot}/users`, user, config)
      dispatch({ type: REGISTER_SUCCESS, payload: res.data})
      console.log("res.data: ", res.data)
  } catch (error) {
    console.log("Caught Error:", error);
    dispatch({ type: REGISTER_FAIL, payload: error.response });
  }
}


export const logoutUser = () => async (dispatch) =>{
  console.log("running Logout User...")
  dispatch({ type: LOGOUT_USER})
}


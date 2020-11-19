import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./Types";
import setAuthToken from "../setAuth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";


const getToken = async () => {
  let token = await AsyncStorage.getItem("token")
  if(token){
    return token
  }
  else return null
}

const initialState = {
  loggedIn: true,
  token: null,
  user: null,
  triedAutoLogin: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setAuthToken(action.payload.token);
      AsyncStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        loggedIn: true,
      };
      case LOGOUT_USER: 
      console.log("running logout user from useDispatch")
      AsyncStorage.removeItem("token")
      return {
        ...state,
        loggedIn: false,
        token: null,
        user: null,
        triedAutoLogin: false,
        error: null
      }
    default:
      return state;
  }
};

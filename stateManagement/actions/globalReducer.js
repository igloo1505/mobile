import { SET_LOADING, SET_FOCUSED } from "./Types";
import { AsyncStorage } from "react-native";
import { Alert } from "react-native";

const initialState = {
  triedAutoLogin: false,
  loading: false,
  focused: "",
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_FOCUSED:
      return {
        ...state,
        focused: action.payload
      }
    default:
      return state;
  }
};

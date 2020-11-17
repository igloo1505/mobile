import { SET_LOADING, SET_FOCUSED, TOGGLE_ADD_TIMER_MODAL } from "./Types";
import { AsyncStorage } from "react-native";
import { Alert } from "react-native";

const initialState = {
  triedAutoLogin: false,
  loading: false,
  focused: "",
  showAddTimerModal: false,
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
      case TOGGLE_ADD_TIMER_MODAL: 
      return {
          ...state,
         showAddTimerModal: !state.showAddTimerModal     
      }
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import userReducer from "./actions/userReducer";
import globalReducer from "./actions/globalReducer";
// import medicationReducer from "./actions/medicationReducer";

export default combineReducers({
  user: userReducer,
  //   medication: medicationReducer,
  app: globalReducer,
});

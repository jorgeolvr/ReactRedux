import { combineReducers } from "redux";
import numbers from "./Numbers/index";
import names from "./Names/index";

export default combineReducers({
  numbers,
  names,
});

import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./auth";
import alert from "./alert";

export default combineReducers({
  ui,
  auth,
  alert,
});

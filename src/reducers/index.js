import { combineReducers } from "redux";
import ruleReducer from "./ruleReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";

export default combineReducers({
  rules: ruleReducer,
  login: loginReducer,
  user: userReducer
});

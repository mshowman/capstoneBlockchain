import { combineReducers } from "redux";
import ruleReducer from "./ruleReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import requestReducer from "./requestReducer";

export default combineReducers({
  rules: ruleReducer,
  login: loginReducer,
  user: userReducer,
  requests: requestReducer,
});

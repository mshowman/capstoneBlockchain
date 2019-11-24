import { combineReducers } from 'redux';
import ruleReducer from './ruleReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

export default combineReducers({
  ruleReducer,
  loginReducer,
  userReducer,
});

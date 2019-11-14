import { combineReducers } from 'redux';
import ruleReducer from './ruleReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  ruleReducer,
  loginReducer,
});

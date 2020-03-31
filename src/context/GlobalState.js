import React, { useReducer } from "react";

import { BloxiomContext } from "./bloxiomContext";

import loginReducer, {
  VALIDATE_CREDENTIALS,
  VALIDATION_STATUSES
} from "../reducers/loginReducer";

import userReducer, {
  GET_USER_INFO,
  RESET_USER_INFO,
  UPDATE_USER_INFO
} from "../reducers/userReducer";

import ruleReducer, {
  ADD_RULE,
  CLEAR_RULES,
  DELETE_RULE,
  EDIT_RULE,
  GET_RULES_FOR_USER
} from "../reducers/ruleReducer";
import requestReducer, {
  ADD_REQUEST,
  CLEAR_REQUESTS,
  UPDATE_REQUESTS
} from "../reducers/requestReducer";

const GlobalState = props => {
  const login = {
    username: "",
    password: "",
    status: VALIDATION_STATUSES.SIGNED_OUT,
    errors: null,
    role: -1
  };

  const user = {
    id: 0,
    role: "",
    userFullName: ""
  };

  const rules = [];

  const requests = [
    {
      index: 0,
      requester: "Me",
      date: "1-21-2020",
      description: "Rule info here"
    },
    {
      index: 1,
      requester: "Me",
      date: "1-21-2020",
      description: "Rule info here"
    },
    {
      index: 2,
      requester: "Me",
      date: "1-21-2020",
      description: "Rule info here"
    }
  ];

  const [loginState, loginDispatch] = useReducer(loginReducer, login);
  const [userState, userDispatch] = useReducer(userReducer, user);
  const [rulesState, rulesDispatch] = useReducer(ruleReducer, rules);
  const [requestsState, requestsDispatch] = useReducer(
    requestReducer,
    requests
  );

  // LOGIN ACTIONS
  const validateCredentials = (username, password) => {
    loginDispatch({
      loginState,
      username,
      password,
      privateKey: "secret",
      type: VALIDATE_CREDENTIALS
    });

    console.log(loginState.status)
    console.log(VALIDATION_STATUSES.VALIDATING_SUCCESS === loginState.status)

    if (loginState.status === VALIDATION_STATUSES.VALIDATING_SUCCESS) getUser();
  };

  const signOut = () => {
    loginDispatch({ loginState, type: VALIDATION_STATUSES.SIGNED_OUT });
    resetUser();
    clearRules();
    clearRequests();
  };

  // USER ACTIONS
  const getUser = () => {
    console.log(userState)
    userDispatch({ userState, role: loginState.role, type: GET_USER_INFO });
  };

  const updateUser = updatedInfo => {
    userDispatch({ userState, updatedInfo, type: UPDATE_USER_INFO });
  };

  const resetUser = () => {
    userDispatch({ state: user, type: RESET_USER_INFO });
  };

  // RULES ACTIONS
  const getRules = () => {
    rulesDispatch({ type: GET_RULES_FOR_USER });
  };

  const addRule = rule => {
    rulesDispatch({ rulesState, rule, type: ADD_RULE });
  };

  const deleteRule = index => {
    rulesDispatch({ rulesState, index, type: DELETE_RULE });
  };

  const editRule = (index, rule) => {
    rulesDispatch({ rulesState, index, rule, type: EDIT_RULE });
  };

  const clearRules = () => {
    rulesDispatch({ rulesState, type: CLEAR_RULES });
  };

  // REQUESTS ACTIONS
  const addRequest = requestData => {
    requestsDispatch({ requestsState, requestData, type: ADD_REQUEST });
  };

  const updateRequests = index => {
    requestsDispatch({ requestsState, index, type: UPDATE_REQUESTS });
  };

  const clearRequests = () => {
    requestsDispatch({ requestsState, type: CLEAR_REQUESTS });
  };

  return (
    <BloxiomContext.Provider
      value={{
        login: loginState,
        validateCredentials,
        signOut,
        user: userState,
        getUser,
        rules: rulesState,
        addRule,
        deleteRule,
        editRule,
        requests: requestsState,
        addRequest,
        updateRequests
      }}
    >
      {props.children}
    </BloxiomContext.Provider>
  );
};

export default GlobalState;

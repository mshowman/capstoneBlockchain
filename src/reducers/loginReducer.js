import {
  retrieveUser,
  validateCredentials,
  ValidationStatuses
} from "../actions";

const callValidator = (username, password, privateKey) => {
  if (username && password && privateKey) {
    return { status: "OK", errors: null };
  }
  return { status: "FAILED", errors: ValidationStatuses.VALIDATING_ERROR };
};

const initialState = {
  login: {
    username: "",
    password: "",
    privateKey: ""
  }
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALL_VALIDATOR":
      return {
        ...state,
        response: callValidator(
          action.username,
          action.password,
          action.privateKey
        )
      };
    case "VALIDATE_CREDENTIALS":
      return {
        ...state,
        status: ValidationStatuses.VALIDATING
      };
    case ValidationStatuses.VALIDATING:
      return {
        ...state,
        status: validateCredentials(state)
      };
    case ValidationStatuses.VALIDATING_SUCCESS:
      return {
        ...state,
        status: retrieveUser(state)
      };
    case ValidationStatuses.VALIDATING_ERROR:
      return {
        ...state,
        status: "LOGIN FAILED"
      };
    default:
      return state;
  }
};

export default loginReducer;

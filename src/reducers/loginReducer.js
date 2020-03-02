import {
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
  username: "",
  password: "",
  privateKey: "",
  status: ValidationStatuses.SIGNED_OUT,
  errors: null
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
    case "USER_LOGIN":
    case "ADMIN_LOGIN":
      return {
        ...state,
        status: ValidationStatuses.VALIDATING_SUCCESS
      };
    case ValidationStatuses.VALIDATING_ERROR:
      return {
        ...state,
        status: "LOGIN FAILED"
      };
    case ValidationStatuses.SIGNED_OUT:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default loginReducer;

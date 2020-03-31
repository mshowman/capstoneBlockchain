export const VALIDATE_CREDENTIALS = "VALIDATE_CREDENTIALS";
export const VALIDATION_STATUSES = {
  VALIDATING_SUCCESS: "VALIDATING_SUCCESS",
  VALIDATING_ERROR: "VALIDATING_ERROR",
  SIGNED_OUT: "SIGNED_OUT"
};

export default (state, action) => {
  switch (action.type) {
    case "VALIDATE_CREDENTIALS":
      switch (action.username) {
        case "user1":
        case "admin1":
          if (action.password === "password" && action.privateKey) {
            return {
              ...state,
              status: VALIDATION_STATUSES.VALIDATING_SUCCESS,
              errors: null,
              role: action.username.includes("user") ? 0 : 1
            };
          }
          return {
            ...state,
            status: VALIDATION_STATUSES.VALIDATING_ERROR,
            errors: "Bad username / password"
          };
        default:
          return {
            ...state,
            status: VALIDATION_STATUSES.VALIDATING_ERROR,
            errors: "Something went wrong. Please try again in a few minutes."
          };
      }
    case VALIDATION_STATUSES.SIGNED_OUT:
    default:
      return state;
  }
};

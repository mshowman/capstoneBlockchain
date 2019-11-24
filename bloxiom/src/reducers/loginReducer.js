import { retrieveUser, validateCredentials, ValidationStatuses } from '../actions';

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case 'VALIDATE_CREDENTIALS':
      return {
        ...state,
        status: ValidationStatuses.VALIDATING,
      };
    case ValidationStatuses.VALIDATING:
      return {
        ...state,
        status: validateCredentials(state),
      };
    case ValidationStatuses.VALIDATING_SUCCESS:
      return {
        ...state,
        status: retrieveUser(state),
      };
    case ValidationStatuses.VALIDATING_ERROR:
      return {
        ...state,
        status: 'LOGIN FAILED',
      };
    default:
      return state;
  }
};

export default loginReducer;

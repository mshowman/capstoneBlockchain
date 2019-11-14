import { validateCredentials, ValidationStatuses } from '../actions';

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
    default:
      return state;
  }
};

export default loginReducer;

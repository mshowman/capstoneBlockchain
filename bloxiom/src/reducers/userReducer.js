import { updateUser } from '../actions';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER':
      return state;
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        ...updateUser(action.updatedInfo),
      };
    default:
      return state;
  }
};

export default userReducer;

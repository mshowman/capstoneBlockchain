import { updateUser } from "../actions";

const initialState = {
  user: {
    id: 0,
    role: "",
    userFullName: "Test Account"
  }
};

const userReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "GET_USER":
      return state;
    case "UPDATE_USER_INFO":
      return {
        ...state,
        ...updateUser(action.updatedInfo)
      };
    default:
      return state;
  }
};

export default userReducer;

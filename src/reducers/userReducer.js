const initialState = {
  id: 0,
  role: "",
  userFullName: ""
};

const mockAuthAdminUser = {
  id: 1,
  role: "Admin",
  userFullName: "Mock Administrator"
};

const mockAuthUser = {
  id: 2,
  role: "User",
  userFullName: "Mock User"
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_INFO":
      return {
        ...state,
        ...action.updatedInfo
      };
    case "USER_LOGIN":
      return {...state, ...mockAuthUser};
    case "ADMIN_LOGIN":
      return {...state, ...mockAuthAdminUser};
    default:
      return initialState;
  }
};

export default userReducer;

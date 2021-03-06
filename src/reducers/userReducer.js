export const mockAuthAdminUser = {
  id: 1,
  role: "Admin",
  userFullName: "Mock Administrator"
};

export const mockAuthUser = {
  id: 2,
  role: "User",
  userFullName: "Mock User"
};

// export const UPDATE_USER_INFO = "UPDATE_USER_INFO";
export const GET_USER_INFO = "GET_USER_INFO";
export const RESET_USER_INFO = "RESET_USER_INFO";

export default (state, action) => {
  switch (action.type) {
    // case "UPDATE_USER_INFO":
    //   return {
    //     ...state,
    //     ...action.updatedInfo
    //   };
    case "GET_USER_INFO":
      return action.role === 0
        ? { ...state, ...mockAuthUser }
        : { ...state, ...mockAuthAdminUser };
    case "RESET_USER_INFO":
      return { id: 0, role: "", userFullName: "" };
    default:
      return state;
  }
};

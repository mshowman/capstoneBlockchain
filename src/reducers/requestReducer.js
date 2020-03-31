export const ADD_REQUEST = "ADD_REQUEST";
export const UPDATE_REQUESTS = "UPDATE_REQUESTS";
export const CLEAR_REQUESTS = "CLEAR_REQUESTS";

let i = 3;

export default (state, action) => {
  switch (action.type) {
    case "ADD_REQUEST":
      return [...state, { index: i++, ...action.requestData }];
    case "UPDATE_REQUESTS":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case "CLEAR_REQUESTS":
      return [];
    default:
      return state;
  }
};

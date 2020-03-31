export const GET_RULES_FOR_USER = "GET_RULES_FOR_USER";
export const ADD_RULE = "ADD_USER";
export const DELETE_RULE = "DELETE_RULE";
export const EDIT_RULE = "EDIT_RULE";
export const CLEAR_RULES = "CLEAR_RULES";

let idNumber = 0;

const ruleReducer = (state, action) => {
  switch (action.type) {
    case "GET_RULES_FOR_USER":
      return state;
    case "ADD_RULE":
      // eslint-disable-next-line no-plusplus
      return [...state, { id: idNumber++, ...action.rule }];
    case "DELETE_RULE":
      return state.length > 1 ? state.filter(r => r.id !== action.index) : [];
    case "EDIT_RULE":
      return state.map(r =>
        r.id === action.index ? { ...r, ...action.rule } : r
      );
    case "CLEAR_RULES":
      return [];
    default:
      return state;
  }
};

export default ruleReducer;

let idNumber = 0;

const initialState = [];

const ruleReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default ruleReducer;

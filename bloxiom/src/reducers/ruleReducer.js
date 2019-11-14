const ruleReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RULE':
      return [
        ...state,
        {
          ...action.rule,
        },
      ];
    case 'DELETE_RULE':
      return state.map.filter((r) => r.id !== action.index);
    case 'EDIT_RULE':
      return [
        state.map((r) => (r.id === action.index
          ? { ...r, ...action.rule }
          : r))];
    default:
      return state;
  }
};

export default ruleReducer;

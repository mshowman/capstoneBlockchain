const ruleReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_RULES_FOR_USER':
      return {
        ...state,
        rules: [{
          groupOrIndividual: 'Individual',
          name: 'Person 1',
          selectedRule: 'Spends At One Time',
          condition: '100',
          result: 'Sign off needed',
        }, {
          groupOrIndividual: 'Individual',
          name: 'Person 1',
          selectedRule: 'Spends At One Time',
          condition: '100',
          result: 'Sign off needed',
        }, {
          groupOrIndividual: 'Individual',
          name: 'Person 1',
          selectedRule: 'Spends At One Time',
          condition: '100',
          result: 'Sign off needed',
        }],
      };
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

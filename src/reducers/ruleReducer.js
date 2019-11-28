let idNumber = 0;

const initialState = {
  rules: [
    {
      // eslint-disable-next-line no-plusplus
      id: idNumber++,
      groupOrIndividual: "Individual",
      name: "Person 1",
      selectedRule: "Spends At One Time",
      condition: "100",
      result: "Sign off needed"
    },
    {
      // eslint-disable-next-line no-plusplus
      id: idNumber++,
      groupOrIndividual: "Individual",
      name: "Person 1",
      selectedRule: "Spends At One Time",
      condition: "50",
      result: "Accept"
    },
    {
      // eslint-disable-next-line no-plusplus
      id: idNumber++,
      groupOrIndividual: "Individual",
      name: "Person 1",
      selectedRule: "Spends At One Time",
      condition: "1000",
      result: "Reject"
    },
    {
      // eslint-disable-next-line no-plusplus
      id: idNumber++,
      groupOrIndividual: "Individual",
      name: "Person 1",
      selectedRule: "Spends Per Month",
      condition: "1000",
      result: "Reject"
    }
  ]
};

const ruleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RULES_FOR_USER":
      return state;
    case "ADD_RULE":
      // eslint-disable-next-line no-plusplus
      return [...state, { ...action.rule, id: idNumber++ }];
    case "DELETE_RULE":
      return { rules: state.rules.filter(r => r.id !== action.index) };
    case "EDIT_RULE":
      return [
        state.map(r => (r.id === action.index ? { ...r, ...action.rule } : r))
      ];
    default:
      return state;
  }
};

export default ruleReducer;

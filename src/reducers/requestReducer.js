const initialState = [
  {
    index: 0,
    requester: "Me",
    date: "1-21-2020",
    description: "Rule info here"
  },
  {
    index: 1,
    requester: "Me",
    date: "1-21-2020",
    description: "Rule info here"
  },
  {
    index: 2,
    requester: "Me",
    date: "1-21-2020",
    description: "Rule info here"
  }
];

let i = 3;

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REQUEST":
      return [...state, { index: i++, ...action.requestData }];
    case "UPDATE_REQUESTS":
      return state.filter(r => r.index !== action.index);
    default:
      return initialState;
  }
};

export default requestReducer;

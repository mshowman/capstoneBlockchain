export const rules = [];

export const addRule = (rule) => ({
  type: 'ADD_RULE',
  rule,
});

export const deleteRule = (index) => ({
  type: 'DELETE_RULE',
  index,
});

export const editRule = (index, rule) => ({
  type: 'EDIT_RULE',
  index,
  rule,
});

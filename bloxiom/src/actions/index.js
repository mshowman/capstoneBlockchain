// RULES ACTIONS
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

// LOGIN ACTIONS
export const validateCredentials = (username, password, privateKey) => ({
  type: 'VALIDATE_CREDENTIALS',
  username,
  password,
  privateKey,
});

export const ValidationStatuses = {
  VALIDATING: 'VALIDATING',
  VALIDATING_SUCCESS: 'VALIDATING_SUCCESS',
  VALIDATING_ERROR: 'VALIDATING_ERROR',
};

// USER ACTIONS
export const retrieveUser = (username, password, privateKey) => ({
  type: 'GET_USER',
  username,
  password,
  privateKey,
});

export const updateUser = (updatedInfo) => ({
  type: 'UPDATE_USER_INFO',
  updatedInfo,
});
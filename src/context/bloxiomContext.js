import React from "react";
import { VALIDATION_STATUSES } from "../reducers/loginReducer";

export const BloxiomContext = React.createContext({
  login: {
    username: "",
    password: "",
    status: VALIDATION_STATUSES.SIGNED_OUT,
    errors: null,
    role: -1
  },
  user: {
    id: 0,
    role: "",
    userFullName: ""
  },
  rules: [],
  requests: [
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
  ]
});

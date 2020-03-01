import React from "react";
import Requests from "../components/Admin/Requests";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ManageGroups from "../components/Admin/ManageGroups";
import {connect} from "react-redux";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "85%",
    padding: "20px 10px 0"
  }
});

const AdminView = ({ auth }) => {
  const classes = useStyles();

  const reqdata = [];

  for (let i = 0; i < 15; i++) {
    reqdata.push({
      requester: "Me",
      date: "1-21-2020",
      description: "Rule info here"
    });
  }

  return auth === "Admin" ? (
    <div className={classes.container}>
      <Requests requestsArray={reqdata} />
      <ManageGroups />
    </div>
  ) : (
    <div className={classes.container}>
      You are not authorized to view this page.
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.user.role
});

export default connect(mapStateToProps)(AdminView);

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ManageGroups from "../components/Admin/ManageGroups";
import RequestsContainer from "../containers/Request/RequestsContainer";
import { connect } from "react-redux";

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

  return auth === "Admin" ? (
    <div className={classes.container}>
      <RequestsContainer />
      <ManageGroups />
    </div>
  ) : (
    <h1 className={classes.container}>
      You are not authorized to view this page.
    </h1>
  );
};

const mapStateToProps = state => ({
  auth: state.user.role
});

export default connect(mapStateToProps)(AdminView);

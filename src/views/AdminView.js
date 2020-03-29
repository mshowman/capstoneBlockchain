import React from "react";
import Requests from "../components/Admin/Requests";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ManageGroups from "../components/Admin/ManageGroups";
import {connect} from "react-redux";
import {updateRequests} from "../actions";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "85%",
    padding: "20px 10px 0"
  }
});

const AdminView = ({ auth, updateRequestList, requestList }) => {
  const classes = useStyles();

  return auth === "Admin" ? (
    <div className={classes.container}>
      <Requests requestsArray={requestList} updateRequestList={updateRequestList}/>
      <ManageGroups />
    </div>
  ) : (
    <h1 className={classes.container}>
      You are not authorized to view this page.
    </h1>
  );
};

const mapStateToProps = state => ({
  auth: state.user.role,
  requestList: state.requests
});

const mapDispatchToProps = dispatch => ({
  updateRequestList: index => dispatch(updateRequests(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminView);

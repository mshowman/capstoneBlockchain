import React, { useContext } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ManageGroups from "../components/Admin/ManageGroups";
import { BloxiomContext } from "../context/bloxiomContext";
import Requests from "../components/Admin/Requests";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "85%",
    padding: "20px 10px 0"
  }
});

const AdminView = props => {
  const classes = useStyles();
  const context = useContext(BloxiomContext);

  return context.user.role === "Admin" ? (
    <div className={classes.container}>
      <Requests />
      <ManageGroups />
    </div>
  ) : (
    <h1 className={classes.container}>
      You are not authorized to view this page.
    </h1>
  );
};

export default AdminView;

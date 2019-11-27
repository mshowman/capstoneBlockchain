import React from "react";
import { makeStyles } from "@material-ui/core";
import VisibleRules from "./containers/Rule/VisibleRules";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  title: {
    flexGrow: 1
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    height: "calc(100% - 64px)",
    marginTop: 64,
    padding: 0
  },
  sideNav: {
    width: 120,
    backgroundColor: "rgb(20, 175, 256, 0.5)",
    padding: 10,
    position: "fixed",
    top: 0,
    bottom: 0,
    marginTop: 64
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title="Rules" styles={classes.title} />
      <div className={classes.mainContent}>
        <SideNav styles={classes.sideNav} />
        <VisibleRules />
      </div>
    </div>
  );
};

export default App;

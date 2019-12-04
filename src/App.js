import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import VisibleRules from "./containers/Rule/RulesViewContainer";
import Header from "./components/Header";
import Login from "./components/Header"
import NewUser from "./components/NewUser";
import ErrorView from "./views/ErrorView";
import SideNavContainer from "./containers/SideNavContainer";


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
  },
  contentWindow: {
    width: "calc(100% - 120px)",
    backgroundColor: "rgb(20, 175, 256, 0.2)",
    marginLeft: 140,
    height: "100vh"
  }
});

// eslint-disable-next-line react/prop-types
const App = ({ userFullName }) => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Header title={`Welcome ${userFullName}!`} styles={classes.title} />
        <div className={classes.mainContent}>
          <SideNavContainer styles={classes.sideNav} />
          <div className={classes.contentWindow}>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/rules">
                <VisibleRules />
              </Route>
              <Route>
                <ErrorView />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  userFullName: state.user.userFullName
});

export default connect(mapStateToProps)(App);

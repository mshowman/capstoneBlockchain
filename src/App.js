import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";

import Header from "./components/Header";
import SideNavContainer from "./containers/SideNavContainer";
import VisibleRules from "./containers/Rule/RulesViewContainer";
import NewUser from "./components/NewUser";
import AdminView from "./views/AdminView";
import ErrorView from "./views/ErrorView";
import LoginView from "./views/LoginView";
import {ValidationStatuses} from "./actions";

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
const App = ({ auth, displayName }) => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        {auth === ValidationStatuses.VALIDATING_SUCCESS ? (
          <>
            <Header />
            <div className={classes.mainContent}>
              <SideNavContainer styles={classes.sideNav} />
              <div className={classes.contentWindow}>
                <Switch>
                  <Route exact path="/">
                    <VisibleRules />
                  </Route>
                  <Route path="/login">
                    <Redirect to="/" />
                  </Route>
                  <Route path="/newUser">
                    <NewUser />
                  </Route>
                  <Route path="/rules">
                    <VisibleRules />
                  </Route>
                  <Route path="/admin">
                    <AdminView />
                  </Route>
                  <Route>
                    <ErrorView />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        ) : (
          <div>
            <LoginView />
          </div>
        )}
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  auth: state.login.status,
});

export default connect(mapStateToProps)(App);

import React, {useContext} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {makeStyles} from "@material-ui/core";

import Header from "./components/Header";
import NewUser from "./components/NewUser";
import AdminView from "./views/AdminView";
import ErrorView from "./views/ErrorView";
import LoginView from "./views/LoginView";
import GlobalState from "./context/GlobalState";
import {BloxiomContext} from "./context/bloxiomContext";
import {VALIDATION_STATUSES} from "./reducers/loginReducer";
import SideNav from "./components/SideNav";
import RuleView from "./views/RuleView";

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
const App = props => {
  const classes = useStyles();
  const context = useContext(BloxiomContext);

  return (
    <GlobalState>
      <div className={classes.root}>
        {context.login.status === VALIDATION_STATUSES.VALIDATING_SUCCESS ? (
          <>
            <Header />
            <div className={classes.mainContent}>
              <Router>
                <>
                  <SideNav styles={classes.sideNav} />
                  <div className={classes.contentWindow}>
                    <Switch>
                      <Route exact path="/" component={RuleView} />
                      <Route path="/login">
                        <Redirect to="/" />
                      </Route>
                      <Route path="/newUser" component={NewUser} />
                      <Route path="/rules" component={RuleView} />
                      <Route path="/admin" component={AdminView} />
                      <Route component={ErrorView} />
                    </Switch>
                  </div>
                </>
              </Router>
            </div>
          </>
        ) : (
          <div>
            <LoginView />
          </div>
        )}
      </div>
    </GlobalState>
  );
};

export default App;

import React, { useContext, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Logo from "../assets/bloxiomLogo.png";
import Background from "../assets/shapes.jpg";
import { BloxiomContext } from "../context/bloxiomContext";
import { VALIDATION_STATUSES } from "../reducers/loginReducer";

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  select: {
    width: 175,
    fontSize: 14
  },
  label: {
    paddingBottom: 10,
    fontSize: 14
  },
  container: {
    padding: 10,
    width: 500,
    height: "auto",
    justifyContent: "center",
    alignItems: "center"
  },
  login: {
    display: "flex",
    width: 300,
    margin: "0 auto",
    justifyContent: "center",
    flexDirection: "column"
  },
  logo: {
    width: 475,
    display: "flex",
    margin: "0 auto"
  },
  fab: {
    backgroundColor: "rgb(78, 174, 248)",
    color: "white"
  },
  textbox: {
    margin: 15
  }
});
const Login = props => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(BloxiomContext);

  return (
    <div className={classes.root}>
      <Paper className={classes.container} style={{ margin: "0 auto" }}>
        <img className={classes.logo} src={Logo} alt="Bloxiom" />
        <div className={classes.login}>
          <TextField
            error={
              context.login.status === VALIDATION_STATUSES.VALIDATING_ERROR
            }
            helperText={
              context.login.status === VALIDATION_STATUSES.VALIDATING_ERROR
                ? context.login.errors
                : ""
            }
            id="standard-required"
            label="Username"
            value={user}
            variant="outlined"
            required
            className={classes.textbox}
            onChange={e => setUser(e.target.value)}
          />
          <TextField
            error={
              context.login.status === VALIDATION_STATUSES.VALIDATING_ERROR
            }
            helperText={
              context.login.status === VALIDATION_STATUSES.VALIDATING_ERROR
                ? context.login.errors
                : ""
            }
            id="standard-password-input"
            label="Password"
            value={password}
            variant="outlined"
            required
            className={classes.textbox}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Button
            variant="contained"
            aria-label="like"
            className={classes.fab}
            color="primary"
            onClick={() => context.validateCredentials(user, password)}
          >
            Login
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Login;

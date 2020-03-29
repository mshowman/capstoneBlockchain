import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Logo from "../assets/bloxiomLogo.png";
import Background from "../assets/shapes.jpg";

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
const Login = ({ status, role, errors, validate, toggleAuth }) => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = () => {
    validate(user, password, "secret");
    if (status === "OK") toggleAuth(role === 0 ? "USER_LOGIN" : "ADMIN_LOGIN");
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.container} style={{ margin: "0 auto" }}>
        <img className={classes.logo} src={Logo} alt="Bloxiom" />
        <div
          className={classes.login}
          onKeyPress={e => {
            if (e.key === "Enter") validate(user, password, "secret");
          }}
        >
          <TextField
            error={status === "FAILED"}
            helperText={
              status === "FAILED" ? errors : ""
            }
            id="standard-required"
            label="Username"
            value={user}
            variant="outlined"
            required
            className={classes.textbox}
            onChange={e => setUser(e.target.value)}
            onClick={() => {
              setUser("");
            }}
          />
          <TextField
            error={status === "FAILED"}
            helperText={
              status === "FAILED" ? errors : ""
            }
            id="standard-password-input"
            label="Password"
            value={password}
            variant="outlined"
            required
            className={classes.textbox}
            onChange={e => setPassword(e.target.value)}
            type="password"
            onClick={() => {
              setPassword("");
            }}
          />
          <Button
            variant="contained"
            aria-label="like"
            className={classes.fab}
            color="primary"
            onClick={signInHandler}
          >
            Login
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Login;

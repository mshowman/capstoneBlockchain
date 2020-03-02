import React, {useEffect, useState} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, Paper } from '@material-ui/core';
import Logo from '../assets/bloxiomLogo.png';
import Background from '../assets/shapes.jpg';

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'rgb(78, 174, 248)',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  select: {
    width: 175,
    fontSize: 14,
  },
  label: {
    paddingBottom: 10,
    fontSize: 14,
  },
  container: {
    padding: 10,
    width: 500,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    display: 'flex',
    width: 300,
    margin: '0 auto',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    width: 475,
    display: 'flex',
    margin: '0 auto',
  },
  fab: {
    backgroundColor: 'rgb(78, 174, 248)',
    color: 'white',
  },
  textbox: {
    margin: 15
  }
});
const Login = ({status, toggleAuth, validate}) => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const userStates = ["USER_LOGIN", "ADMIN_LOGIN"];

  useEffect(() => {
    if (status === "OK") toggleAuth(userStates[Math.floor(Math.random()*userStates.length)])
  }, [status, toggleAuth, userStates])

  return (
    <div className={classes.root}>
      <MuiThemeProvider>
        <Paper className={classes.container} style={{ margin: '0 auto' }}>
          <img className={classes.logo} src={Logo} alt="Bloxiom" />
          <div className={classes.login}>
            <TextField
              id="standard-required"
              label="Username"
              defaultValue=" "
              variant="outlined"
              required="true"
              className={classes.textbox}
              onChange={e => setUser(e.target.value)}
            />
            <TextField
              id="standard-required"
              label="Password"
              defaultValue=" "
              variant="outlined"
              required="true"
              className={classes.textbox}
              onChange={e => setPassword(e.target.value)}
            />
            <Button variant="extended" aria-label="like" className={classes.fab} color="white" onClick={() => validate(user, password, "secret")}>
                        Login
            </Button>
          </div>
        </Paper>
      </MuiThemeProvider>
    </div>
  );
};

export default Login;

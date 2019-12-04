import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { MuiThemeProvider, Paper } from '@material-ui/core';
import Logo from '../assets/bloxiomLogo.png';
import Background from '../assets/shapes.jpg';

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
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
  },
  newUser: {
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
});
const Rule = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider>
        <Paper className={classes.container} style={{ margin: '0 auto' }}>
          <img className={classes.logo} src={Logo} alt="Bloxiom" />
          <br />
          <div className={classes.newUserBlock}>
            <div className={classes.newUser}>
              <TextField
                id="standard-required"
                label="First Name"
                defaultValue=" "
                variant="outlined"
                required="true"
              />
              <br />
              <br />
              <TextField
                id="standard-required"
                label="Last Name"
                defaultValue=" "
                variant="outlined"
                required="true"
              />
              <br />
              <br />
              <TextField
                id="standard-required"
                label="Username"
                defaultValue=" "
                variant="outlined"
                required="true"
              />
              <br />
              <br />
              <TextField
                id="standard-required"
                label="Password"
                defaultValue=" "
                variant="outlined"
                required="true"
              />
              <br />
              <br />
              <Fab variant="extended" aria-label="like" className={classes.fab} color="white">
                Sign Up
              </Fab>
            </div>
          </div>
        </Paper>
      </MuiThemeProvider>
    </div>
  );
};

export default Rule;

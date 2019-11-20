import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { MuiThemeProvider, Paper } from 'material-ui';
import Logo from './bloxiomLogo.png';

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'rgb(78, 174, 248)',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
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
});
const Rule = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider>
        <Paper className={classes.container} style={{ margin: '0 auto' }}>
          <img className={classes.logo} src={Logo} alt="Bloxiom" />
          <br />
          <div className={classes.login}>
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
                        Login
            </Fab>
          </div>
        </Paper>
      </MuiThemeProvider>
    </div>
  );
};

export default Rule;

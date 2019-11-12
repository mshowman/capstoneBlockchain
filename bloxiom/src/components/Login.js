import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
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
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    width: 175,
  },
});

const Rule = () => {
  const classes = useStyles();

  const [selectedGroupInd, setSelectedGroupInd] = useState('');
  const [selected, setSelected] = useState('');
  const [selectedRule, setSelectedRule] = useState('');
  const [availableVariables, setAvailableVariables] = useState([]);
  const [condition, setCondition] = useState('');
  const [validEntry, setValidEntry] = useState(false);
  const [savedEntry, setSavedEntry] = useState(false);
  const [open, setOpen] = useState(false);


  return (
    <div className={classes.root}>
      <div className={classes.container} style={{margin: '0 auto'}}>
        <div className={classes.login } >
          <TextField
            id="standard-required"
            label="Username"
            defaultValue=" "
            variant="outlined"
            onChange={(event) => setCondition(event.target.value)}
            disabled={savedEntry}
          />
          <br />
          <br />
          <TextField
            id="standard-required"
            label="Password"
            defaultValue=" "
            floatingLabelText="Username"
            variant="outlined"
            onChange={(event) => setCondition(event.target.value)}
            disabled={savedEntry}
          />
          <br />
          <br />
          <Fab variant="extended" aria-label="like" className={classes.fab} color="primary" >
                        Login
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default Rule;

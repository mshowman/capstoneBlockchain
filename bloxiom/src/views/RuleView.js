import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import SavedRule from '../components/Rule/SavedRule';
import RuleDialog from '../components/Rule/RuleDialog';

const dummyRule = {
  groupOrIndividual: 'Individual',
  name: 'Larry Fitzgerald',
  selectedRule: 'Spends At One Time',
  condition: '100',
  result: 'Sign off needed',
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  title: {
    flexGrow: 1,
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100% - 64px)',
    marginTop: 64,
    padding: 0,
  },
  sideNav: {
    width: 120,
    backgroundColor: 'rgb(20, 175, 256, 0.5)',
    padding: 10,
    position: 'fixed',
    top: 0,
    bottom: 0,
    marginTop: 64,
  },
  contentWindow: {
    width: 'calc(100% - 120px)',
    backgroundColor: 'rgb(20, 175, 256, 0.2)',
    marginLeft: 140,
  },
  addRule: {
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'rgb(0, 0, 0, 0.2)',
    width: 'inherit',
    padding: 10,
  },
  addButton: {
    margin: '0 auto',
  },
});

const RuleView = () => {
  const classes = useStyles();
  const [rules, setRules] = useState([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]);
  const [showDialog, setShowDialog] = useState(false);

  // eslint-disable-next-line no-unused-vars
  function addRule(rule) {
    setRules([...rules, rule]);
  }

  function newDialog(toggle) {
    setShowDialog(toggle);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
              Rules
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.mainContent}>
        <div className={classes.sideNav}>SideNav?</div>
        <div className={classes.contentWindow}>
          {/* eslint-disable-next-line no-unused-vars,react/no-array-index-key */}
          {rules.map((rule, i) => <SavedRule key={i} info={dummyRule} />)}
          <div className={classes.addRule}>
            <Button
              className={classes.addButton}
              onClick={() => setShowDialog(true)}
              variant="contained"
              color="primary"
            >
              Add New Rule
            </Button>
          </div>
        </div>
        { showDialog
          && <RuleDialog showDialog closeDialog={newDialog} />}
      </div>
    </div>
  );
};

export default RuleView;

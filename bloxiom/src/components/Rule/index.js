import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Dropdown from './Dropdown';
import mockRuleVariablesForGroups from '../../constants/GroupRuleVariables';
import mockRuleVariablesForIndividuals from '../../constants/IndividualRuleVariables';
import { individualMockValues, groupMockValues } from '../../constants/Groups';

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    width: 200,
  },
  select: {
    width: 175,
    fontSize: 14,
    textAlign: 'center',
  },
  label: {
    paddingBottom: 10,
    fontSize: 14,
  },
  textBox: {
    paddingBottom: 10,
    fontSize: 14,
  },
  textInputFontSize: {
    fontSize: 14,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    width: 175,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    width: 175,
  },
  deleteButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    width: 50,
    height: 50,
    marginLeft: 10,
    '&:hover':
      {
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
      },
  },
  editButton: {
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
    width: 50,
    height: 50,
    '&:hover':
      {
        backgroundColor: 'rgba(0, 255, 0, 0.6)',
      },
  },
  saveButton: {
    backgroundColor: 'rgba(0, 0, 255, 0.4)',
    width: 50,
    height: 50,
    '&:hover':
      {
        backgroundColor: 'rgba(0, 0, 255, 0.6)',
      },
  },
});

const Rule = () => {
  const classes = useStyles();

  // hooks for each field
  const [selectedGroupInd, setSelectedGroupInd] = useState('');
  const [selected, setSelected] = useState('');
  const [selectedRule, setSelectedRule] = useState('');
  const [availableVariables, setAvailableVariables] = useState([]);
  const [condition, setCondition] = useState('');
  const [selectedRequire, setSelectedRequire] = useState('');

  // hooks for validation and toggling dialogs
  const [validEntry, setValidEntry] = useState(false);
  const [savedEntry, setSavedEntry] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDeleteCheck, setOpenDeleteCheck] = useState(false);

  const updateGroupInd = (updatedValue) => {
    if (savedEntry && updatedValue !== '') {
      setOpenDeleteCheck(true);
    } else {
      setSelectedGroupInd(updatedValue === 'delete' ? '' : updatedValue);
      setSelected('');
      setSelectedRule('');
      setAvailableVariables([]);
      setCondition('');
      setSelectedRequire('');
      setSavedEntry(false);
      setValidEntry(false);
      setOpenDeleteCheck(false);
    }
  };

  const updateSelected = (updatedValue) => {
    setSelected(updatedValue);
    setSelectedRule('');
    setAvailableVariables([]);
    setCondition('');
    setSelectedRequire('');
    setSavedEntry(false);
    setValidEntry(false);
  };

  const updateRule = (updatedValue) => {
    setSelectedRule(updatedValue);
    setCondition('');
    setSelectedRequire('');
    setSavedEntry(false);
    setValidEntry(false);
  };

  const updateRequire = (updatedValue) => {
    setSelectedRequire(updatedValue);
  };

  useEffect(() => {
    setValidEntry(selectedGroupInd !== '' && selected !== '' && selectedRule !== '' && condition !== '' && selectedRequire !== '');
  }, [selectedGroupInd, selected, selectedRule, condition, selectedRequire]);

  useEffect(() => {
    if (condition === '') setSelectedRequire('');
  }, [condition]);

  useEffect(() => {
    if (savedEntry) setOpen(true);
  }, [savedEntry]);

  useEffect(() => {
    const getRules = () => {
      if (selected === '') return [];

      const source = (selected.includes('Group') || selected.includes('Entire'))
        ? mockRuleVariablesForGroups
        : mockRuleVariablesForIndividuals;

      return source.filter((person) => person.name === selected)[0].variables;
    };

    setAvailableVariables(getRules());
  }, [selected]);

  return (
    <Paper className={classes.root}>
      <div className={classes.container}>
        <Dropdown
          dropdownStyles={classes.select}
          labelStyles={classes.label}
          saveState={updateGroupInd}
          content={['Individual', 'Group']}
          selected={selectedGroupInd}
          label="Rule is for"
          disabled={savedEntry}
        />
      </div>
      {selectedGroupInd
      && (
      <div className={classes.container}>
        <Dropdown
          dropdownStyles={classes.select}
          labelStyles={classes.label}
          saveState={updateSelected}
          content={selectedGroupInd === 'Group' ? groupMockValues : individualMockValues}
          selected={selected}
          label={selectedGroupInd}
          disabled={savedEntry}
        />
      </div>
      )}
      {availableVariables.length > 0
      && (
      <div className={classes.container}>
        <Dropdown
          dropdownStyles={classes.select}
          labelStyles={classes.label}
          saveState={updateRule}
          content={availableVariables.map((variable) => variable.displayText)}
          selected={selectedRule}
          label="Rule"
          disabled={savedEntry}
        />
      </div>
      )}
      {selectedRule
      && (
      <div className={classes.container}>
        <TextField
          className={classes.textBox}
          label="Condition for rule:"
          defaultValue=""
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.textInputFontSize,
            },
          }}
          onChange={(event) => setCondition(event.target.value)}
          disabled={savedEntry}
        />
      </div>
      )}
      {condition
      && (
        <div className={classes.container}>
          <Dropdown
            dropdownStyles={classes.select}
            labelStyles={classes.label}
            saveState={updateRequire}
            content={['Sign off', 'Locking account', 'Decline', 'Accept']}
            selected={selectedRequire}
            label="Requires"
            disabled={savedEntry}
          />
        </div>
      )}
      <div className={classes.buttonGroup}>
        {savedEntry && (
        <IconButton className={classes.editButton} onClick={() => setSavedEntry(false)}>
          <EditIcon />
        </IconButton>
        )}
        {validEntry && !savedEntry && (
        <IconButton className={classes.saveButton} onClick={() => setSavedEntry(validEntry)}>
          <SaveIcon />
        </IconButton>
        )}
        <IconButton
          className={classes.deleteButton}
          onClick={() => updateGroupInd('delete')}
          disabled={selectedGroupInd === ''}
        >
          <DeleteForeverIcon />
        </IconButton>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        key="save-message"
        message={<span id="message-id">Saved!</span>}
        autoHideDuration={1000}
        open={open}
        onClose={() => setOpen(false)}
      />
      <Dialog
        open={openDeleteCheck}
        onClose={() => setOpenDeleteCheck(false)}
      >
        <DialogTitle>Delete this rule?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDeleteCheck(false)} color="primary">
            No
          </Button>
          <Button onClick={() => updateGroupInd('')} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Rule;

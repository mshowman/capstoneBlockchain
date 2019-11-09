import React, { useState, useEffect } from 'react';
import { Select } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import Snackbar from '@material-ui/core/Snackbar';
import { individualMockValues, groupMockValues } from '../../constants/Groups';
import mockRuleVariablesForIndividuals from '../../constants/IndividualRuleVariables';
import mockRuleVariablesForGroups from '../../constants/GroupRuleVariables';
import Dropdown from './Dropdown';

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
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
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    width: 175,
  },
  deleteButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    width: 50,
    height: 50,
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

  const [selectedGroupInd, setSelectedGroupInd] = useState('');
  const [selected, setSelected] = useState('');
  const [selectedRule, setSelectedRule] = useState('');
  const [availableVariables, setAvailableVariables] = useState([]);
  const [condition, setCondition] = useState('');
  const [validEntry, setValidEntry] = useState(false);
  const [savedEntry, setSavedEntry] = useState(false);
  const [open, setOpen] = useState(false);

  const updateGroupInd = (updatedValue) => {
    setSelectedGroupInd(updatedValue);
  };

  const updateSelected = (updatedValue) => {
    setSelected(updatedValue);
  };

  const updateRule = (updatedValue) => {
    setSelectedRule(updatedValue);
  };
  //
  // const updateAvailableVariables = (updatedValue) => {
  //   setAvailableVariables(updatedValue);
  // };

  useEffect(() => {
    setValidEntry(selectedGroupInd !== '' && selected !== '' && selectedRule !== '' && condition !== '');
  }, [selectedGroupInd, selected, selectedRule, condition]);

  useEffect(() => {
    setSelected('');
    setSelectedRule('');
    setAvailableVariables([]);
    setCondition('');
    setSavedEntry(false);
    setValidEntry(false);
  }, [selectedGroupInd]);

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
    <div className={classes.root}>
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
          content={availableVariables}
          selected={selectedRule}
          label="Rule"
          disabled={savedEntry}
        />
        <FormControl variant="outlined">
          <InputLabel className={classes.label} htmlFor="select-rule">
                Rule
          </InputLabel>
          <Select
            className={classes.select}
            value={selectedRule}
            onChange={(event) => setSelectedRule(event.target.value)}
            input={<Input id="select-rule" />}
            inputProps={{
              id: 'ruleSelect',
            }}
            disabled={savedEntry}
          >
            {
                  availableVariables.map((ind, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <MenuItem key={i} value={ind.name}>
                      {ind.displayText}
                    </MenuItem>
                  ))
                }
          </Select>
        </FormControl>
      </div>
      )}
      {selectedRule
      && (
      <div className={classes.container}>
        <TextField
          id="standard-required"
          label="Enter condition for rule:"
          defaultValue=" "
          variant="outlined"
          onChange={(event) => setCondition(event.target.value)}
          disabled={savedEntry}
        />
      </div>
      )}
      <div className={classes.container}>
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
        <IconButton className={classes.deleteButton} onClick={() => setSelectedGroupInd('')} disabled={selectedGroupInd === ''}>
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
    </div>
  );
};

export default Rule;

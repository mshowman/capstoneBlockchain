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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { individualMockValues, groupMockValues } from '../constants/Groups';
import mockRuleVariablesForIndividuals from '../constants/IndividualRuleVariables';
import mockRuleVariablesForGroups from '../constants/GroupRuleVariables';

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

  useEffect(() => {
    setValidEntry(selectedGroupInd !== '' && selected !== '' && selectedRule !== '' && condition !== '');
  }, [selectedGroupInd, selected, selectedRule, condition]);

  useEffect(() => {
    setSelected('');
    setSelectedRule('');
    setAvailableVariables([]);
    setCondition('');
  }, [selectedGroupInd]);

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
        <FormControl variant="outlined">
          <InputLabel className={classes.label} htmlFor="select-group-ind">
            Rule applies to
          </InputLabel>
          <Select
            className={classes.select}
            value={selectedGroupInd}
            onChange={(event) => setSelectedGroupInd(event.target.value)}
            input={<Input id="select-group-ind" />}
            inputProps={{
              id: 'groupIndSelect',
            }}
          >
            {['Group', 'Individual'].map((group) => (
              <MenuItem key={group} value={group}>
                {group}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {selectedGroupInd
      && (
      <div className={classes.container}>
        <FormControl variant="outlined">
          <InputLabel className={classes.label}>
            {selectedGroupInd}
          </InputLabel>
          <Select
            className={classes.select}
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
            input={<Input id="select" />}
            inputProps={{
              id: 'select',
            }}
          >
            {
                  selectedGroupInd === 'Group'
                    ? groupMockValues.map((group) => (
                      <MenuItem key={group} value={group}>
                        {group}
                      </MenuItem>
                    ))
                    : individualMockValues.map((ind) => (
                      <MenuItem key={ind} value={ind}>
                        {ind}
                      </MenuItem>
                    ))
                }
          </Select>
        </FormControl>
      </div>
      )}
      {availableVariables.length > 0
      && (
      <div className={classes.container}>
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
        />
      </div>
      )}
      <IconButton
        disabled={!validEntry}
      >
        <SaveIcon />
      </IconButton>
      <IconButton>
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
};

export default Rule;

import React from 'react';
import { Select } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';
import { individualMockValues, groupMockValues } from '../constants/Groups';
import { mockRuleVariablesForIndividuals } from '../constants/IndividualRuleVariables';
import { mockRuleVariablesForGroups } from '../constants/GroupRuleVariables';

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

  const [selectedGroupInd, setSelectedGroupInd] = React.useState('');
  const [selected, setSelected] = React.useState('');
  const [selectedRule, setSelectedRule] = React.useState('');

  const handleGroupIndChange = (event) => {
    setSelectedGroupInd(event.target.value);
  };

  const handleIndChange = (event) => {
    setSelected(event.target.value);
  };

  const handleRuleChange = (event) => {
    setSelectedRule(event.target.value);
  };

  const inputLabel = React.useRef(null);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <FormControl variant="outlined">
          <InputLabel className={classes.label} ref={inputLabel} htmlFor="select-group-ind">
                    Rule applies to
          </InputLabel>
          <Select
            className={classes.select}
            value={selectedGroupInd}
            onChange={handleGroupIndChange}
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
      {['Group', 'Individual'].includes(selectedGroupInd)
      && (
      <div className={classes.container}>
        <FormControl variant="outlined">
          <InputLabel className={classes.label}>
            {selectedGroupInd}
          </InputLabel>
          <Select
            className={classes.select}
            value={selected}
            onChange={handleIndChange}
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
      { selected !== ''
      && (
      <div className={classes.container}>
        <FormControl variant="outlined">
          <InputLabel className={classes.label} ref={inputLabel} htmlFor="select-rule">
            Rule
          </InputLabel>
          <Select
            className={classes.select}
            value={selectedRule}
            onChange={handleRuleChange}
            input={<Input id="select-rule" />}
            inputProps={{
              id: 'ruleSelect',
            }}
          >
            {
              selectedGroupInd === 'Group'
                ? mockRuleVariablesForGroups.map((group) => (
                  <MenuItem key={group} value={group}>
                    {group}
                  </MenuItem>
                ))
                : mockRuleVariablesForIndividuals.map((ind) => (
                  <MenuItem key={ind} value={ind}>
                    {ind}
                  </MenuItem>
                ))
            }
          </Select>
        </FormControl>
      </div>
      )}
      <div className={classes.container}>
        <TextField
          id="standard-required"
          label="Enter condition for rule:"
          defaultValue=" "
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Rule;

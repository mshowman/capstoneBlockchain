import React from 'react';
import { Select } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';
import { individualMockValues, groupMockValues } from '../constants/Groups';

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

  const [selectedGroup, setSelectedGroup] = React.useState([]);
  const [selectedInd, setSelectedInd] = React.useState([]);

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const handleIndChange = (event) => {
    setSelectedInd(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <FormControl variant="outlined">
          <InputLabel className={classes.label} for='select-group'>
                    Select the Group(s) this rule will apply to:
          </InputLabel>
          <Select
            className={classes.select}
            value={selectedGroup}
            onChange={handleGroupChange}
            input={<Input id="select-group" />}
            inputProps={{
              id: 'groupSelect',
            }}
          >
            {groupMockValues.map((group) => (
              <MenuItem key={group} value={group}>
                {group}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.container}>
        <InputLabel className={classes.label} id="indSelect">
                    Select the Individual(s) this rule will apply to:
        </InputLabel>
        <Select
          className={classes.select}
          value={selectedInd}
          onChange={handleIndChange}
          input={<Input id="select-ind" />}
          inputProps={{
            id: 'indSelect',
          }}
        >
          {individualMockValues.map((group) => (
            <MenuItem key={group} value={group}>
              {group}
            </MenuItem>
          ))}
        </Select>
      </div>
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

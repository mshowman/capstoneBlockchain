import InputLabel from '@material-ui/core/InputLabel';
import { Select } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  content, selected, label, dropdownStyles, labelStyles, saveState, disabled,
}) => (
  <FormControl variant="outlined">
    <InputLabel className={labelStyles}>
      {label}
    </InputLabel>
    <Select
      className={dropdownStyles}
      value={selected}
      onChange={(event) => saveState(event.target.value)}
      input={<Input />}
      disabled={disabled}
    >
      {content.map((group) => (
        <MenuItem key={group} value={group}>
          {group}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

Dropdown.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dropdownStyles: PropTypes.string.isRequired,
  labelStyles: PropTypes.string.isRequired,
  saveState: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Dropdown;

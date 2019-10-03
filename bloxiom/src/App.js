import React from 'react';
import { Select } from '@material-ui/core';
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";

const groupMockValues = [
  'Entire Org',
  'Group 1',
  'Group 2',
  'Group N',
];

function App() {
  const [selectedGroups, setSelectedGroups] = React.useState([]);

  const handleChange = (event) => {
    setSelectedGroups(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSelectedGroups(value);
  };

  return (
    <div className="App">
      <p>This is the main app.</p>
      <Select
        multiple
        value={selectedGroups}
        onChange={handleChange}
        input={<Input id="select-multiple" />}
      >
        {groupMockValues.map((group) => (
          <MenuItem key={group} value={group}>
            {group}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default App;

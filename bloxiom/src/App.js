import React from "react";
import { Select } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import makeStyles from "@material-ui/core/styles/makeStyles";

const groupMockValues = ["Entire Org", "Group 1", "Group 2", "Group N"];

const individualMockValues = ["Person 1", "Person 2", "Person 3", "Person N"];

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: "flex",
    flexDirection: "row"
  },
  select: {
    width: 300
  },
  label: {
    marginBottom: 10,
    marginLeft: 10
  },
  container: {
    flexDirection: "column"
  }
});

function App() {
  const classes = useStyles();

  const [selectedGroup, setSelectedGroup] = React.useState([]);
  const [selectedInd, setSelectedInd] = React.useState([]);

  const handleGroupChange = event => {
    setSelectedGroup(event.target.value);
  };

  const handleIndChange = event => {
    setSelectedInd(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <InputLabel className={classes.label} id="groupSelect">
          Select the Group(s) this rule will apply to:
        </InputLabel>
        <Select
          className={classes.select}
          value={selectedGroup}
          onChange={handleGroupChange}
          input={<Input id="select-multiple" />}
          inputProps={{
            id: "groupSelect"
          }}
        >
          {groupMockValues.map(group => (
            <MenuItem key={group} value={group}>
              {group}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className={classes.container}>
        <InputLabel className={classes.label} id="indSelect">
          Select the Individual(s) this rule will apply to:
        </InputLabel>
        <Select
          className={classes.select}
          value={selectedInd}
          onChange={handleIndChange}
          input={<Input id="select-multiple" />}
          inputProps={{
            id: "indSelect"
          }}
        >
          {individualMockValues.map(group => (
            <MenuItem key={group} value={group}>
              {group}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default App;

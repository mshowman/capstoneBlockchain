import React, { useEffect, useState } from "react";

// There is nothing wrong with this import, it is an issue with this package's dependency's export
// noinspection ES6CheckImport
import PropTypes from "prop-types";

import { DialogContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import Dropdown from "./Dropdown";
import { groupMockValues, individualMockValues } from "../../constants/Groups";
import mockRuleVariablesForGroups from "../../constants/GroupRuleVariables";
import mockRuleVariablesForIndividuals from "../../constants/IndividualRuleVariables";

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
    width: 200
  },
  select: {
    width: 175,
    fontSize: 14,
    textAlign: "center"
  },
  label: {
    paddingBottom: 10,
    fontSize: 14
  },
  textBox: {
    paddingBottom: 10,
    fontSize: 14
  },
  textInputFontSize: {
    fontSize: 14,
    textAlign: "center"
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    width: 175
  }
});

const RuleDialog = ({ showDialog, closeDialog, info }) => {
  const classes = useStyles();

  const { groupOrIndividual, name, rule, cond, result } = info;

  // hooks for each field
  const [selectedGroupInd, setSelectedGroupInd] = useState(groupOrIndividual);
  const [selected, setSelected] = useState(name);
  const [selectedRule, setSelectedRule] = useState(rule);
  const [availableVariables, setAvailableVariables] = useState([]);
  const [condition, setCondition] = useState(cond);
  const [selectedRequire, setSelectedRequire] = useState(result);

  // hooks for validation and toggling dialogs
  const [validEntry, setValidEntry] = useState(false);
  const [savedEntry, setSavedEntry] = useState(showDialog);
  const [open, setOpen] = useState(false);

  // helper functions to pass down to child components in order to update state
  const updateRequire = updatedValue => {
    setSelectedRequire(updatedValue);
    setValidEntry(false);
    setSavedEntry(false);
  };

  const updateRule = updatedValue => {
    setSelectedRule(updatedValue);
    setCondition("");
    updateRequire("");
  };

  const updateSelected = updatedValue => {
    setSelected(updatedValue);
    updateRule("");
  };

  const updateGroupInd = updatedValue => {
    setSelectedGroupInd(updatedValue === "delete" ? "" : updatedValue);
    updateSelected("");
  };

  useEffect(() => {
    setValidEntry(
      selectedGroupInd !== "" &&
        selected !== "" &&
        selectedRule !== "" &&
        condition !== "" &&
        selectedRequire !== ""
    );
  }, [selectedGroupInd, selected, selectedRule, condition, selectedRequire]);

  useEffect(() => {
    if (condition === "") updateRequire("");
  }, [condition]);

  useEffect(() => {
    if (savedEntry) setOpen(true);
    setSavedEntry(false);
  }, [savedEntry]);

  useEffect(() => {
    const getRules = () => {
      if (selected === "") return [];

      const source =
        selected.includes("Group") || selected.includes("Entire")
          ? mockRuleVariablesForGroups
          : mockRuleVariablesForIndividuals;

      return source.filter(person => person.name === selected)[0].variables;
    };

    setAvailableVariables(getRules());
  }, [selected]);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{savedEntry ? "Edit Rule" : "Add New Rule"}</DialogTitle>
      <DialogContent className={classes.root}>
        <div className={classes.container}>
          <Dropdown
            dropdownStyles={classes.select}
            labelStyles={classes.label}
            saveState={updateGroupInd}
            content={["Individual", "Group"]}
            selected={selectedGroupInd}
            label="Rule is for"
            disabled={savedEntry}
          />
        </div>
        {selectedGroupInd && (
          <div className={classes.container}>
            <Dropdown
              dropdownStyles={classes.select}
              labelStyles={classes.label}
              saveState={updateSelected}
              content={
                selectedGroupInd === "Group"
                  ? groupMockValues
                  : individualMockValues
              }
              selected={selected}
              label={selectedGroupInd}
              disabled={savedEntry}
            />
          </div>
        )}
        {availableVariables.length > 0 && (
          <div className={classes.container}>
            <Dropdown
              dropdownStyles={classes.select}
              labelStyles={classes.label}
              saveState={updateRule}
              content={availableVariables.map(variable => variable.displayText)}
              selected={selectedRule}
              label="Rule"
              disabled={savedEntry}
            />
          </div>
        )}
        {selectedRule && (
          <div className={classes.container}>
            <TextField
              className={classes.textBox}
              label="Condition for rule:"
              defaultValue=""
              variant="outlined"
              InputProps={{
                classes: {
                  input: classes.textInputFontSize
                }
              }}
              onChange={event => setCondition(event.target.value)}
              disabled={savedEntry}
            />
          </div>
        )}
        {condition && (
          <div className={classes.container}>
            <Dropdown
              dropdownStyles={classes.select}
              labelStyles={classes.label}
              saveState={updateRequire}
              content={[
                "Sign off needed",
                "Locking account",
                "Decline",
                "Accept"
              ]}
              selected={selectedRequire}
              label="Results in"
              disabled={savedEntry}
            />
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
            closeDialog();
          }}
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            updateGroupInd("");
            closeDialog();
          }}
          color="primary"
          disabled={!validEntry}
        >
          Save Rule
        </Button>
      </DialogActions>
    </Dialog>
  );
};

RuleDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  info: PropTypes.shape({
    groupOrIndividual: PropTypes.string,
    name: PropTypes.string,
    rule: PropTypes.string,
    cond: PropTypes.string,
    result: PropTypes.string
  })
};

RuleDialog.defaultProps = {
  info: {
    groupOrIndividual: "",
    name: "",
    rule: "",
    cond: "",
    result: ""
  }
};

export default RuleDialog;

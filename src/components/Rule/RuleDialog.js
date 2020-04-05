import React, { useCallback, useContext, useEffect, useState } from "react";
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
import { BloxiomContext } from "../../context/bloxiomContext";

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 400
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

const RuleDialog = props => {
  const classes = useStyles();
  const context = useContext(BloxiomContext);
  const { showDialog, closeDialog, id, info, newRule } = props;

  const information = newRule
    ? { name: '', groupOrIndividual: '', operator: '', condition: '', result: '' }
    : info;
  const editingRule = !!id;

  const [selectedGroupInd, setSelectedGroupInd] = useState(
    information.groupOrIndividual
  );
  const [selectedName, setSelectedName] = useState(information.name);

  const getAvailableRules = useCallback(() => {
    const mockRules =
      selectedGroupInd.includes("Group") || selectedGroupInd.includes("Entire")
        ? mockRuleVariablesForGroups
        : mockRuleVariablesForIndividuals;

    if (selectedGroupInd === "" || selectedName === "") return [];
    const values = mockRules.filter(r => r.name === selectedName);

    return values[0].variables.map(v => v.displayText);
  }, [selectedGroupInd, selectedName]);

  const [availableVariables, setAvailableVariables] = useState(
    getAvailableRules()
  );

  const [selectedRule, setSelectedRule] = useState(information.selectedRule);
  const [selectedOperator, setSelectedOperator] = useState(
    information.operator
  );
  const [condition, setCondition] = useState(information.condition);
  const [selectedRequire, setSelectedRequire] = useState(information.result);

  // hooks for validation and toggling dialogs
  const [open, setOpen] = useState(showDialog);
  const [validEntry, setValidEntry] = useState(false);

  useEffect(() => {
    setAvailableVariables([...getAvailableRules()]);
  }, [selectedName, getAvailableRules]);

  useEffect(() => {
    setValidEntry(
      selectedGroupInd !== "" &&
        selectedName !== "" &&
        selectedRule !== "" &&
        condition !== "" &&
        selectedRequire !== ""
    );
  }, [
    selectedGroupInd,
    selectedName,
    selectedRule,
    condition,
    selectedRequire
  ]);

  const getRuleInfo = () => ({
    groupOrIndividual: selectedGroupInd,
    name: selectedName,
    selectedRule: selectedRule,
    operator: selectedOperator,
    condition: condition,
    result: selectedRequire
  });

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{editingRule ? "Edit Rule" : "Add New Rule"}</DialogTitle>
      <DialogContent className={classes.root}>
        <div className={classes.container}>
          <Dropdown
            dropdownStyles={classes.select}
            labelStyles={classes.label}
            saveState={setSelectedGroupInd}
            content={["Individual", "Group"]}
            selected={selectedGroupInd}
            label="Rule is for"
          />
        </div>
        <div className={classes.container}>
          <Dropdown
            dropdownStyles={classes.select}
            labelStyles={classes.label}
            saveState={setSelectedName}
            content={
              selectedGroupInd === "Group"
                ? groupMockValues
                : individualMockValues
            }
            selected={selectedName}
            label={selectedGroupInd}
            disabled={selectedGroupInd === ""}
          />
        </div>
        <div className={classes.container}>
          <Dropdown
            dropdownStyles={classes.select}
            labelStyles={classes.label}
            saveState={setSelectedRule}
            content={availableVariables}
            selected={selectedRule}
            label="Rule"
            disabled={selectedName === ""}
          />
        </div>
        <div className={classes.container}>
          <Dropdown
            dropdownStyles={classes.select}
            labelStyles={classes.label}
            saveState={setSelectedOperator}
            content={[
              "More Than",
              "Less Than",
              "More Than Or Equal To",
              "Less Than Or Equal To",
              "Exactly"
            ]}
            selected={selectedOperator}
            label="Condition"
            disabled={selectedRule === ""}
          />
        </div>
        <div className={classes.container}>
          <TextField
            className={classes.textBox}
            label="Condition for Rule:"
            defaultValue={condition}
            variant="outlined"
            InputProps={{
              classes: {
                input: classes.textInputFontSize
              }
            }}
            onChange={event => setCondition(event.target.value)}
            disabled={selectedRule === ""}
          />
        </div>
        <div className={classes.container}>
          <Dropdown
            dropdownStyles={classes.select}
            labelStyles={classes.label}
            saveState={setSelectedRequire}
            content={[
              "Sign off needed",
              "Locking account",
              "Decline",
              "Accept"
            ]}
            selected={selectedRequire}
            label="Results in"
            disabled={condition === ""}
          />
        </div>
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
            editingRule
              ? context.editRule(id, getRuleInfo())
              : context.addRule(getRuleInfo());
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

export default RuleDialog;

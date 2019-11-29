import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import SavedRuleView from "../containers/Rule/SavedRuleContainer";
import RuleDialogContainer from "../containers/Rule/RuleDialogContainer";

const useStyles = makeStyles({
  addRule: {
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    bottom: 0,
    backgroundColor: "rgb(0, 0, 0, 0.2)",
    width: "calc(100% - 120px)",
    padding: 10
  },
  addButton: {
    margin: "0 auto"
  }
});

const RuleView = ({ rules }) => {
  const classes = useStyles();
  const [showDialog, setShowDialog] = useState(false);

  function newDialog(toggle) {
    setShowDialog(toggle);
  }

  return (
    <>
      <div>
        {rules &&
          rules.length > 0 &&
          // eslint-disable-next-line react/no-array-index-key
          rules.map((rule, i) => (
            <SavedRuleView key={i} id={rule.id} info={rule} />
          ))}
        <div className={classes.addRule}>
          <Button
            className={classes.addButton}
            onClick={() => setShowDialog(true)}
            variant="contained"
            color="primary"
          >
            Add New Rule
          </Button>
        </div>
      </div>
      {showDialog && <RuleDialogContainer showDialog closeDialog={newDialog} />}
    </>
  );
};

RuleView.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default RuleView;

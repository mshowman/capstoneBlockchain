import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import SavedRule from "../components/Rule/SavedRule";
import RuleDialog from "../components/Rule/RuleDialog";

const useStyles = makeStyles({
  contentWindow: {
    width: "calc(100% - 120px)",
    backgroundColor: "rgb(20, 175, 256, 0.2)",
    marginLeft: 140
  },
  addRule: {
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    bottom: 0,
    backgroundColor: "rgb(0, 0, 0, 0.2)",
    width: "inherit",
    padding: 10
  },
  addButton: {
    margin: "0 auto"
  }
});

const RuleView = ({ getRules }) => {
  const classes = useStyles();
  const [showDialog, setShowDialog] = useState(false);
  const rules = getRules();

  function newDialog(toggle) {
    setShowDialog(toggle);
  }

  return (
    <>
      <div className={classes.contentWindow}>
        {/* eslint-disable-next-line no-unused-vars,react/no-array-index-key */}
        {rules &&
          rules.length > 0 &&
          rules.map((rule, i) => <SavedRule key={i} info={rule} />)}
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
      {showDialog && <RuleDialog showDialog closeDialog={newDialog} />}
    </>
  );
};

RuleView.propTypes = {
  getRules: PropTypes.func.isRequired
};

export default RuleView;

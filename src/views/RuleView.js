import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import RuleDialog from "../components/Rule/RuleDialog";
import SavedRuleView from "../containers/Rule/SavedRuleView";

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

const RuleView = ({ rules }) => {
  const classes = useStyles();
  const [showDialog, setShowDialog] = useState(false);

  function newDialog(toggle) {
    setShowDialog(toggle);
  }

  return (
    <>
      <div className={classes.contentWindow}>
        {rules &&
          rules.length > 0 &&
          // eslint-disable-next-line react/no-array-index-key
          rules.map((rule, i) => <SavedRuleView key={i} id={i} info={rule} />)}
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
  rules: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default RuleView;
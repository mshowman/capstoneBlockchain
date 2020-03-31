import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import {BloxiomContext} from "../context/bloxiomContext";
import SavedRule from "../components/Rule/SavedRule";
import RuleDialog from "../components/Rule/RuleDialog";

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

const RuleView = props => {
  const classes = useStyles();
  const context = useContext(BloxiomContext);
  const [showDialog, setShowDialog] = useState(false);

  function newDialog(toggle) {
    setShowDialog(toggle);
  }

  return (
    <>
      <div>
        {context.rules.length > 0 &&
          // eslint-disable-next-line react/no-array-index-key
          context.rules.map((rule, i) => (
            <SavedRule key={i} id={rule.id} info={rule} />
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
      {showDialog && <RuleDialog showDialog closeDialog={newDialog} />}
    </>
  );
};

export default RuleView;

import React, {useContext, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Snackbar from "@material-ui/core/Snackbar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {BloxiomContext} from "../../context/bloxiomContext";
import RuleDialog from "./RuleDialog";

const useStyles = makeStyles({
  root: {
    margin: "10px auto",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ruleText: {
    fontSize: 18,
    padding: 10
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10
  },
  deleteButton: {
    backgroundColor: "rgba(255, 0, 0, 0.4)",
    width: 50,
    height: 50,
    marginLeft: 10,
    "&:hover": {
      backgroundColor: "rgba(255, 0, 0, 0.6)"
    }
  },
  editButton: {
    backgroundColor: "rgba(0, 255, 0, 0.4)",
    width: 50,
    height: 50,
    "&:hover": {
      backgroundColor: "rgba(0, 255, 0, 0.6)"
    }
  },
  saveButton: {
    backgroundColor: "rgba(0, 0, 255, 0.4)",
    width: 50,
    height: 50,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 255, 0.6)"
    }
  }
});

const SavedRule = props => {
  const classes = useStyles();
  const [openDeleteCheck, setOpenDeleteCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [openRuleDialog, setOpenRuleDialog] = useState(false);
  const context = useContext(BloxiomContext);

  const { id, info } = props;
  const { name, selectedRule, operator, condition, result } = info;

  function closeRuleDialog() {
    setOpenRuleDialog(false);
  }

  return (
    <Paper className={classes.root}>
      <Typography className={classes.ruleText}>
        {`If ${name} spends ${operator.toLowerCase()} $${condition} ${selectedRule.toUpperCase()} ==> ${result.toUpperCase()}.`}
      </Typography>
      <div className={classes.buttonGroup}>
        <IconButton
          className={classes.editButton}
          onClick={() => setOpenRuleDialog(true)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          className={classes.deleteButton}
          onClick={() => setOpenDeleteCheck(true)}
        >
          <DeleteForeverIcon />
        </IconButton>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="save-message"
        message={<span id="message-id">Saved!</span>}
        autoHideDuration={1000}
        open={open}
        onClose={() => setOpen(false)}
      />
      <Dialog open={openDeleteCheck} onClose={() => setOpenDeleteCheck(false)}>
        <DialogTitle>Delete this rule?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDeleteCheck(false)} color="primary">
            No
          </Button>
          <Button
            onClick={() => {
              context.deleteRule(id);
              setOpenDeleteCheck(false);
            }}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      {openRuleDialog && (
        <RuleDialog
          showDialog
          closeDialog={closeRuleDialog}
          info={info}
          id={id}
        />
      )}
    </Paper>
  );
};

export default SavedRule;

import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Dropdown from "../Rule/Dropdown";
import {
  CardHeader,
  Checkbox,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
  container: {
    width: "45%"
  },
  span: {
    width: "40%",
    flexDirection: "column",
    padding: "0 5px",
    textAlign: "center",
    backgroundColor: "lightgray"
  },
  buttons: {
    width: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  dropdown: {
    width: 300,
    margin: "0 auto",
    paddingTop: 15,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center"
  },
  label: {
    marginLeft: 70,
    paddingTop: 30,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },
  manageContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: 10
  }
});

const ManageGroups = () => {
  const groups = ["Admin", "Rule Setter", "User"];
  const [selectedGroup, setSelectedGroup] = useState();
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Dropdown
        label={"Manage a Group"}
        selected={selectedGroup}
        saveState={() => setSelectedGroup()}
        content={groups}
        labelStyles={classes.label}
        dropdownStyles={classes.dropdown}
      />
      <div className={classes.manageContainer}>
        <Card className={classes.span}>
          <CardHeader title="Unselected" />
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText>User 1</ListItemText>
            </ListItem>
          </List>
        </Card>
        <span className={classes.buttons}>
          <button>{">"}</button>
          <button>{"<"}</button>
        </span>
        <Card className={classes.span}>
          <CardHeader title="Selected" />
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText>User 1</ListItemText>
            </ListItem>
          </List>
        </Card>
      </div>
    </Paper>
  );
};

export default ManageGroups;

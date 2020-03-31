import React, { useContext } from "react";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { BloxiomContext } from "../../context/bloxiomContext";

const useStyles = makeStyles({
  title: {
    flex: 1
  }
});

const Header = props => {
  const classes = useStyles();
  const context = useContext(BloxiomContext);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {`Welcome, ${context.user.userFullName}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

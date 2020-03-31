import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles({
  title: {
    flex: 1
  }
});

const Header = ({ userFullName }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {`Welcome, ${userFullName}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  styles: PropTypes.string
};

Header.defaultProps = {
  styles: "",
};

const mapStateToProps = state => ({
  userFullName: state.user.userFullName
});

export default connect(mapStateToProps)(Header);

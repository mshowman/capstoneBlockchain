import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    fontSize: 24,
    display: "block",
    textDecoration: "none",
    textAlign: "center",
    padding: "15px 0"
  }
});

const SideNav = ({ styles }) => {
  const classes = useStyles();
  return (
    <div className={styles}>
      <Link to="/login" className={classes.link}>
        Login
      </Link>
      <Link to="/" className={classes.link}>
        Rules
      </Link>
      <Link to="/profile" className={classes.link}>
        Profile
      </Link>
      <Link to="/admin" className={classes.link}>
        Admin
      </Link>
    </div>
  );
};

SideNav.propTypes = {
  styles: PropTypes.string
};

SideNav.defaultProps = {
  styles: ""
};

export default SideNav;

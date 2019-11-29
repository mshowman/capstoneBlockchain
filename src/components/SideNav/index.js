import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import GavelIcon from "@material-ui/icons/Gavel";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const useStyles = makeStyles({
  link: {
    fontSize: 22,
    display: "block",
    textDecoration: "none",
    textAlign: "left",
    padding: "15px 0"
  },
  signOut: {
    bottom: 2,
    position: "absolute",
    width: "inherit"
  },
  icon: {
    verticalAlign: "bottom",
    paddingRight: 10
  }
});

const SideNav = ({ styles }) => {
  const classes = useStyles();
  const routes = [
    { text: "Login", route: "login" },
    { text: "Rules", route: "rules" },
    { text: "Profile", route: "profile" },
    { text: "Admin", route: "admin" }
  ];
  const icons = [
    <VpnKeyIcon className={classes.icon} />,
    <GavelIcon className={classes.icon} />,
    <AccountBoxIcon className={classes.icon} />,
    <SupervisorAccountIcon className={classes.icon} />
  ];
  return (
    <div className={styles}>
      {routes.map((r, i) => (
        <Link key={i} to={`/${r.route}`} className={classes.link}>
          {icons[i]}
          {r.text}
        </Link>
      ))}
      <Link to="/signout" className={[classes.link, classes.signOut].join(" ")}>
        <ExitToAppIcon className={classes.icon} />
        Sign Out
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

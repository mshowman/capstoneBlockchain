import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import GavelIcon from "@material-ui/icons/Gavel";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { ValidationStatuses } from "../../actions";

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

const SideNav = ({ styles, status, toggleAuth, getAuth }) => {
  const classes = useStyles();
  const routes = [
    { text: "Login", route: "rules", status: ValidationStatuses.SIGNING_OUT },
    {
      text: "Rules",
      route: "rules",
      status: ValidationStatuses.VALIDATING_SUCCESS
    },
    {
      text: "Profile",
      route: "profile",
      status: ValidationStatuses.VALIDATING_SUCCESS
    },
    {
      text: "Admin",
      route: "admin",
      status: ValidationStatuses.VALIDATING_SUCCESS
    },
    {
      text: "Sign Out",
      route: "login",
      status: ValidationStatuses.VALIDATING_SUCCESS
    }
  ];
  const icons =
    status === ValidationStatuses.VALIDATING_SUCCESS
      ? [
          <GavelIcon className={classes.icon} />,
          <AccountBoxIcon className={classes.icon} />,
          <SupervisorAccountIcon className={classes.icon} />,
          <ExitToAppIcon className={classes.icon} />
        ]
      : [<VpnKeyIcon className={classes.icon} />];

  const userStates = ["USER_LOGIN", "ADMIN_LOGIN"];

  return (
    <div className={styles}>
      {routes
        .filter(s => s.status === status)
        .map((r, i) => (
          <Link
            key={r.route}
            to={`/${r.route}`}
            className={
              r.text === "Sign Out"
                ? [classes.link, classes.signOut].join(" ")
                : classes.link
            }
            onClick={() => {
              switch (r.text) {
                case "Sign Out":
                  return toggleAuth(ValidationStatuses.SIGNING_OUT);
                case "Login":
                  return toggleAuth(userStates[Math.floor(Math.random()*userStates.length)]);
                default:
                  return {};
              }
            }}
          >
            {icons[i]}
            {r.text}
          </Link>
        ))}
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

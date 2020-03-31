import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GavelIcon from "@material-ui/icons/Gavel";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { BloxiomContext } from "../../context/bloxiomContext";

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

const SideNav = props => {
  const classes = useStyles();
  const routes = [
    {
      text: "Rules",
      route: "rules"
    },
    {
      text: "Profile",
      route: "profile"
    },
    {
      text: "Admin",
      route: "admin"
    },
    {
      text: "Sign Out",
      route: "login"
    }
  ];
  const icons = [
    <GavelIcon className={classes.icon} />,
    <AccountBoxIcon className={classes.icon} />,
    <SupervisorAccountIcon className={classes.icon} />,
    <ExitToAppIcon className={classes.icon} />
  ];

  const context = useContext(BloxiomContext);

  return (
    <div className={props.styles}>
      {routes.map((r, i) => (
        <Link
          key={r.route}
          to={`/${r.route}`}
          className={
            r.text === "Sign Out"
              ? [classes.link, classes.signOut].join(" ")
              : classes.link
          }
          onClick={() => (r.text === "Sign Out" ? context.signOut() : {})}
        >
          {icons[i]}
          {r.text}
        </Link>
      ))}
    </div>
  );
};

export default SideNav;

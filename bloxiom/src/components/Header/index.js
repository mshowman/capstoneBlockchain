import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar/AppBar';
import React from 'react';

const Header = ({ title, styles }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" className={styles}>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

Header.defaultProps = {
  styles: '',
};

export default Header;

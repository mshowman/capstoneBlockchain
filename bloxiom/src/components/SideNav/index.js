import React from 'react';
import PropTypes from 'prop-types';

const SideNav = ({ styles }) => (
  <div className={styles}>SideNav?</div>
);

SideNav.propTypes = {
  styles: PropTypes.string,
};

SideNav.defaultProps = {
  styles: '',
};

export default SideNav;

import React from 'react';
import PropTypes from 'prop-types';

import stylesheet from './ButtonPresenter.stylesheet.js';

export default function ButtonPresenter({ hasHover, children, ...otherProps}) {
  const styles = stylesheet({ hasHover });
  return (
    <button
      style={styles.button}
      {...otherProps}
    >
      {children}
    </button>
  )
}

ButtonPresenter.propTypes = {
  children: PropTypes.node,
  hasHover: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
}

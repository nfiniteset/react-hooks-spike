import React from 'react';
import PropTypes from 'prop-types';

import stylesheet from './ButtonPresenter.stylesheet.js';

export default function ButtonPresenter({ hasHover, hasFocus, children, ...otherProps}) {
  const styles = stylesheet({ hasHover, hasFocus });

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

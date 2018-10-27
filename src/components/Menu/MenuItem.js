import React, { useContext } from 'react';

import useMouseInteractions from '../../hooks/useMouseInteractions';
import useFocus from '../../hooks/useFocusInteractions';

import stylesheet from './MenuItem.stylesheet.js';
import { ThemeContext } from '../../theme';

export default function MenuItem(props) {
  const {
    hasHover: _hasHover,
    hasFocus: _hasFocus,
    isPressed: _isPressed,
    label,
    ...otherProps
  } = props;
  const { hasHover, isPressed, ...otherMouseInteractionProps } = useMouseInteractions(props);
  const { hasFocus, ...otherFocusProps } = useFocus(props);
  const theme = useContext(ThemeContext);

  const styles = stylesheet({ hasHover, hasFocus, isPressed }, theme);

  return (
    <div
      tabIndex="0"
      style={styles.container}
      {...otherProps}
      {...otherMouseInteractionProps}
      {...otherFocusProps}
    >
      <span style={styles.label}>{label}</span>
    </div>
  )
}

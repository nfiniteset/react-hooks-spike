import React, { useContext } from 'react';

import useMouseInteractions from '../../hooks/useMouseInteractions';
import useFocus from '../../hooks/useFocus';
import { ThemeContext } from '../../theme';

import stylesheet from './Input.stylesheet.js';

export default function Input(props) {
  const {
    hasHover: _hasHover,
    hasFocus: _hasFocus,
    isPressed: _isPressed,
    children,
    ...otherProps
  } = props;
  const { hasHover, isPressed, ...otherMouseInteractionProps } = useMouseInteractions(props);
  const { hasFocus, ...otherFocusProps } = useFocus(props);
  const theme = useContext(ThemeContext);

  const styles = stylesheet({ hasHover, hasFocus, isPressed }, theme);

  return (
    <input
      style={styles.input}
      {...otherProps}
      {...otherMouseInteractionProps}
      {...otherFocusProps}
    />
  )
}

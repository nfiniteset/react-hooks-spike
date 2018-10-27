import React, { useContext } from 'react';

import useMouseInteractions from '../../hooks/useMouseInteractions';
import useFocus from '../../hooks/useFocusInteractions';
import { ThemeContext } from '../../theme';

import stylesheet from './Button.stylesheet.js';

/**
 *
 *  - Maintains internal presentational state
 *  - Presentational state overridable by props
 *  - Calls passed-in callbacks (onMouseEnter, onFocus, etc)
 *  - Allows arbitrary attributes through to button (but excludes presentational state overrides)
 */
export default function Button(props) {
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
    <button
      style={styles.button}
      {...otherProps}
      {...otherMouseInteractionProps}
      {...otherFocusProps}
    >
      {children}
    </button>
  )
}

import React, { useContext } from 'react';
import { ThemeContext } from '../../theme';
import stylesheet from './MenuContainer.stylesheet';

export default function MenuContainer({ children, styles }) {
  const theme = useContext(ThemeContext);
  const stylesheetStyles = {...stylesheet(null, theme).container, ...styles};

  return (
    <ul style={stylesheetStyles}>
      {children}
    </ul>
  )
}

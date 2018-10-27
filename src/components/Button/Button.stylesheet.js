export default function({ hasHover, hasFocus, isPressed }, theme) {
  const haloColor = hasFocus ? theme.autodeskBlue100 : (hasHover ? theme.charcoal100 : 'transparent');
  const haloWidth = isPressed ? '4px' : ((hasHover || hasFocus) ? '2px' : '0');

  return {
    button: {
      display: "block",
      boxSizing: 'borderBox',
      backgroundColor: theme.white,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: hasFocus ? theme.autodeskBlue600 : theme.charcoal600,
      borderRadius: theme.borderRadiiSmall,
      boxShadow: `0 0 0 ${haloWidth} ${haloColor}`,
      padding: '7px 12px',
      fontSize: '14px',
      lineHeight: '20px',
      color: theme.textColor,
      outline: 'none',
      userSelection: 'none'
    }
  }
}

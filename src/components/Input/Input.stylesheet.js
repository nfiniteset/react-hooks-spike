export default function stylesheet({ hasHover, hasFocus, isPressed }, theme) {
  const haloColor = hasFocus ? theme.autodeskBlue100 : (hasHover ? theme.charcoal100 : 'transparent');
  const haloWidth = isPressed ? '4px' : ((hasHover || hasFocus) ? '2px' : '0');

  return {
    input: {
      display: 'inline-block',
      width: "100%",
      border: "none",
      backgroundColor: theme.white,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: hasFocus ? theme.autodeskBlue600 : (hasHover ? theme.charcoal600 : theme.charcoal300),
      boxShadow: `0 ${haloWidth} 0 0 ${haloColor}`,
      padding: `4px 0`,
      outline: 'none',
      fontSize: '14px',
      lineHeight: "20px"
    }
  }
}

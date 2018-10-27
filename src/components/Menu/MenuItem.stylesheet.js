export default function stylesheet({ hasHover, hasFocus, isPressed }, theme) {
  return {
    container: {
      backgroundColor: isPressed ? theme.autodeskBlue100 : (hasHover ? theme.charcoal100 : theme.white),
      boxShadow: hasFocus ? `inset 0 0 0 4px ${theme.autodeskBlue100}` : null,
      outline: "none",
      borderBottom: `1px solid ${theme.charcoal100}`,
      padding: "4px 12px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      lineHeight: "20px",
      textAlign: "left"
    },
    selection: {

    }
  }
}

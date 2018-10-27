export default function stylesheet({ hasHover, hasFocus, isPressed, isSelected, isHighlighted }, theme) {
  return {
    container: {
      display: "flex",
      backgroundColor: isPressed ? theme.autodeskBlue100 : (isHighlighted ? theme.charcoal100 : theme.white),
      boxShadow: hasFocus ? `inset 0 0 0 4px ${theme.autodeskBlue100}` : null,
      outline: "none",
      borderBottom: `1px solid ${theme.charcoal100}`,
      padding: "4px 0"
    },
    label: {
      flex: "1 1 auto",
      fontSize: "14px",
      lineHeight: "20px",
      textAlign: "left",
      padding: "0 12px"
    },
    selection: {
      display: isSelected ? "block" : "none",
      flex: "0 0 24px",
      color: theme.carcoal300,
    }
  }
}

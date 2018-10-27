export default function stylesheet(props, theme) {
  return {
    container: {
      borderRadius: theme.borderRadiiSmall,
      shadow: theme.highShadow,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.charcoal300,
      padding: "0",
      margin: "0"
    }
  }
}

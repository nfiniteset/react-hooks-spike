const autodeskBlue100 = "#CDEAF7";
const autodeskBlue600 = "#0686c2";
const charcoal600 ="#808080";
const charcoal100 = "#EEEEEE";
const textColor = "#3c3c3c";
const white = "#fff";

export default function({ hasHover, hasFocus }) {
  const haloColor = hasFocus ? autodeskBlue100 : (hasHover ? charcoal100 : 'transparent');
  const haloWidth = (hasHover || hasFocus) ? '2px' : '0';

  return {
    button: {
      backgroundColor: white,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: hasFocus ? autodeskBlue600 : charcoal600,
      borderRadius: '2px',
      boxShadow: `0 0 0 ${haloWidth} ${haloColor}`,
      outline: 'none'
    }
  }
}

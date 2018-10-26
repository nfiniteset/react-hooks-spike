import Button from "./Button";

const autodeskBlue600 = "#0686c2";
const charcoal600 ="#808080";
const textColor = "#3c3c3c";
const white = "#fff";

export default function({ hasHover }) {
  return {
    button: {
      backgroundColor: white,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: hasHover ? autodeskBlue600 : charcoal600
    }
  }
}

import { useState } from 'react';

export default function useFocus(props) {
  const [hasFocusState, setHasFocusState] = useState(false);
  const hasFocus = props.hasFocus !== undefined ? props.hasFocus : hasFocusState;

  function onFocus(event) {
    if(props.onFocus) {
      props.onFocus(event);
    }
    setHasFocusState(true);
  }

  function onBlur(event) {
    if(props.onBlur) {
      props.onBlur(event);
    }
    setHasFocusState(false);
  }

  return {
    onFocus, onBlur, hasFocus
  }
}

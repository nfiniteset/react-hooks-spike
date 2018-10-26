import { useState } from 'react';

export default function useFocus() {
  const [hasFocus, setHasFocus] = useState(false);

  function onFocus() {
    setHasFocus(true);
  }

  function onBlur() {
    setHasFocus(false);
  }

  return {
    onFocus, onBlur, hasFocus
  }
}

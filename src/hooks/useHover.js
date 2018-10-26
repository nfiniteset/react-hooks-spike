import { useState } from 'react';

export default function useHover() {
  const [hasHover, setHasHover] = useState(false);

  function onMouseEnter() {
    setHasHover(true);
  }

  function onMouseLeave() {
    setHasHover(false);
  }

  return {
    onMouseEnter, onMouseLeave, hasHover
  }
}

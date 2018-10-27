import { useEffect } from 'react';

export default function useClickAwayCallback(onClickAway, target) {
  function handleClickAway(event) {
    if (target && (target.current === event.target || !target.current.contains(event.target))) {
      onClickAway(event);
    }
  }

  useEffect(() => {
    window.document.body.addEventListener("click", handleClickAway);

    return () => {
      window.document.body.removeEventListener("click", handleClickAway);
    }
  }, [target, onClickAway]);
}

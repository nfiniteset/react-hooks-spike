import { useState } from 'react';

export default function useMouseInteractions(props) {
  const [hasHoverState, setHasHoverState] = useState(false);
  const hasHover = props.hasHover !== undefined ? props.hasHover : hasHoverState;
  const [ isPressedState, setPressedState ] = useState(false);
  const isPressed = props.isPressed !== undefined ? props.isPressed : isPressedState;

  function onMouseEnter(event) {
    if(props.onMouseEnter) {
      props.onMouseEnter(event);
    }

    setHasHoverState(true);
  }

  function onMouseLeave(event) {
    if(props.onMouseLeave) {
      props.onMouseLeave(event);
    }

    setPressedState(false);
    setHasHoverState(false);
  }

  function onMouseDown(event) {
    if(props.onMouseDown) {
      props.onMouseDown(event);
    }
    setPressedState(true);
  }

  function onMouseUp(event) {
    if(props.onMouseUp) {
      props.onMouseUp(event);
    }
    setPressedState(false);
  }

  return {
    hasHover, onMouseEnter, onMouseLeave, isPressed, onMouseDown, onMouseUp
  }
}

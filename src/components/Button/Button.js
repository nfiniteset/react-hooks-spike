import React from 'react';
import useHover from '../../hooks/useHover';
import useFocus from '../../hooks/useFocus';
import ButtonPresenter from './ButtonPresenter';

export default function Button({ children, onClick }) {
  const hoverProps = useHover();
  const focusProps = useFocus();

  return (
    <ButtonPresenter
      {...hoverProps}
      {...focusProps}
      onClick={onClick}
    >
      {children}
    </ButtonPresenter>
  );
}

import React from 'react';
import useHover from '../../hooks/useHover';
import ButtonPresenter from './ButtonPresenter';

export default function Button({ children, onClick }) {
  const hoverProps = useHover();

  return <ButtonPresenter {...hoverProps} onClick={onClick}>{children}</ButtonPresenter>
}

import React, { useState, useRef } from 'react';
import Input from '../Input';
import { MenuContainer, MenuItem } from '../Menu';
import useClickAwayCallback from '../../hooks/useClickAwayCallback';
import stylesheet from './Select.stylesheet.js';

export default function Select(props) {
  const { options, value, onChange, ...otherProps } = props;
  const [ open, setOpen ] = useState(false);
  const wrapper = useRef(null);
  const selectedOption = options.find(o => o.value === value) || {};
  const styles = stylesheet(props);
  useClickAwayCallback(() => {
    setOpen(false);
  }, wrapper);

  return (
    <div ref={wrapper} style={styles.wrapper}>
      <Input
        value={selectedOption.label || ""}
        onFocus={() => setOpen(true)}
        readOnly
        {...otherProps}
      />
      {open
        ? <div style={styles.menu}>
            <MenuContainer>
              {options.map(option => (
                <MenuItem
                  key={option.label}
                  label={option.label}
                  isSelected={option.value === value}
                  onClick={() => onChange(option)}
                />
              ))}
            </MenuContainer>
          </div>
        : null}
    </div>
  );
}

import React, { useState, useRef } from 'react';
import Input from '../Input';
import Menu from '../Menu';
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
            <Menu
              items={options}
              selectedItem={selectedOption}
              onSelectionChange={o => onChange(o)}
            />
          </div>
        : null}
    </div>
  );
}

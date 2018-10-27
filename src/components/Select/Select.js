import React, { useState, useRef } from 'react';
import Input from '../Input';
import Menu from '../Menu';
import useClickAwayCallback from '../../hooks/useClickAwayCallback';
import stylesheet from './Select.stylesheet.js';
import useMenuHighlightReducer from '../../hooks/useMenuHighlightReducer';

export default function Select(props) {
  const { options, value, onChange, ...otherProps } = props;
  const [ open, setOpen ] = useState(false);
  const wrapper = useRef(null);
  const selectedOption = options.find(o => o.value === value) || {};
  const styles = stylesheet(props);
  useClickAwayCallback(() => {
    setOpen(false);
  }, wrapper);
  const { highlightedItem, dispatch } = useMenuHighlightReducer(options);

  function handleKeyDown(event, item) {
    switch(event.key) {
      case "ArrowUp": {
        setOpen(true);
        dispatch({ type: "decrement" });
        break;
      }
      case "ArrowDown": {
        setOpen(true);
        dispatch({ type: "increment" });
        break;
      }
      case "Enter": {
        if (open) {
          onChange(highlightedItem)
        } else {
          setOpen(true);
        }
        break
      }
      case "Escape": {
        setOpen(false);
        break
      }
      default: {}
    }
  }

  return (
    <div ref={wrapper} style={styles.wrapper}>
      <Input
        value={selectedOption.label || ""}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        readOnly
        {...otherProps}
      />
      {open
        ? <div style={styles.menu}>
            <Menu
              items={options}
              selectedItem={selectedOption}
              highlightedItem={highlightedItem}
              dispatch={dispatch}
              onSelectionChange={o => onChange(o)}
            />
          </div>
        : null}
    </div>
  );
}

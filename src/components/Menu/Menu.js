import React, { useEffect } from 'react';
import MenuContainer from './MenuContainer';
import MenuItem from './MenuItem';

export default function Menu(props) {
  const { items, selectedItem, onSelectionChange, highlightedItem, dispatch } = props;

  useEffect(() => {
    dispatch({ type: "reset" });
  }, []);

  function handleKeyDown(event, item) {
    switch(event.key) {
      case "ArrowUp": {
        dispatch({ type: "decrement" });
        break;
      }
      case "ArrowDown": {
        dispatch({ type: "increment" });
        break;
      }
      case "Enter": {
        onSelectionChange(highlightedItem);
        break
      }
      default: {}
    }
  }

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <MenuItem
          key={item.label}
          label={item.label}
          isSelected={item === selectedItem}
          isHighlighted={item === highlightedItem}
          onClick={() => onSelectionChange(item)}
          onMouseEnter={() => dispatch({ type: "highlight", payload: index })}
          onFocus={() => dispatch({ type: "highlight", payload: index })}
          onKeyDown={(e) => handleKeyDown(e, item)}
        />
      ))}
    </MenuContainer>
  )
}

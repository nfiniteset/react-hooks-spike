import React from 'react';
import MenuContainer from './MenuContainer';
import MenuItem from './MenuItem';

export default function Menu(props) {
  const { items, selectedItem, onSelectionChange } = props;
  return (
    <MenuContainer>
      {items.map(item => (
        <MenuItem
          key={item.label}
          label={item.label}
          isSelected={item === selectedItem}
          onClick={() => onSelectionChange(item)}
          // onKeyPress={(e) => handleItemKeypress(e, item)}
        />
      ))}
    </MenuContainer>
  )
}

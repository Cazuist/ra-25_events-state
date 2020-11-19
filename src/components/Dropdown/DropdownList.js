import { useState } from 'react';
import DropdownItem from './DropdownItem';

export default function DropdownList({ list, viewStatus }) {
  const [selectedItem, changeItem] = useState('Profile Information');

  const onChangeItem = (item) => {
    changeItem((prev) => prev = item);

    console.log(item);
    console.log(selectedItem);
  }

  if (!viewStatus) return null;
  
  return (
    <ul className="dropdown-list">
      {list.map((item) => <DropdownItem item={item}
        selected={selectedItem}
        key={item}
        onItemClick={onChangeItem}
        />)}
    </ul>
  )
} 
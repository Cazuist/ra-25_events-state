import { useState } from 'react';
import DropdownList from './DropdownList';
import dropdownItems from '../../data/dropdownItems';

export default function Dropdown() {
  const [status, switchMenu] = useState(false);

  const onMenuSwitch = () => {
    switchMenu((prev) => !prev);
  }

  return (
    <div className="dropdown_wrapper">
      <div className="dropdown-header" >
        <div className="dropdown-header_title">Account settings</div>
        <div className="dropdown-header_btn material-icons"
          onClick={onMenuSwitch}
        >public</div>
      </div>
      <DropdownList list={dropdownItems} viewStatus={status}/>
    </div>
  );
}

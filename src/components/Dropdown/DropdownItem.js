export default function DropdownItem(props) {
  const { item, selected } = props;

  const onItemClick = (evt) => {
    props.onItemClick(evt.currentTarget.textContent);
  }

  return (
    <li className={`dropdown-item${selected === item ? ' selected' : ''}`} 
      onClick={onItemClick}>{item} </li>
  );
}
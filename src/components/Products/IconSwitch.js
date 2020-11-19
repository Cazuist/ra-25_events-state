export default function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <div className='icon-switch-btn'>
      <i className={'material-icons'} onClick={onSwitch}>
        {icon}
      </i>
    </div>
  );
}
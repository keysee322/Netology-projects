function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="header">
      <button onClick={() => onSwitch(icon)} class="material-icons">
        {icon}
      </button>
    </div>
  );
}

export default IconSwitch;

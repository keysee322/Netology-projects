import close from "./../close.svg";

function ClockItem({ defaultTime, onDelete, clock }) {
  const currentTime = defaultTime + clock.zone * 1000 * 60 * 60;
  const hours = Math.floor(currentTime / (1000 * 60 * 60)) % 12;
  const min = Math.floor(currentTime / (1000 * 60)) % 60;
  const sec = Math.floor(currentTime / 1000) % 60;

  return (
    <div className="clock-item">
      {<h3>{clock.name}</h3>}
      <button onClick={() => onDelete(clock.id)} className="btn-close">
        <img src={close} alt="" />
      </button>

      <div className="clock-dial">
        <div
          className="clock-hours"
          style={{
            transform: `translate(0, -50%) rotate(${30 * hours}deg)`,
          }}
        ></div>
        <div
          className="clock-min"
          style={{ transform: `translate(0, -50%) rotate(${6 * min}deg)` }}
        ></div>
        <div
          className="clock-sec"
          style={{ transform: `translate(0, -50%) rotate(${6 * sec + 6}deg)` }}
        ></div>
        <div className="clock-center"></div>
      </div>
    </div>
  );
}

export default ClockItem;

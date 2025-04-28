import { useState } from "react";
import ClockItem from "./ClockItem";

function getCurrentUTCTime() {
  const now = Number(new Date());

  return now;
}

function ClockContainer({ clocksArr, onDelete }) {
  const [defaultTime, setDefaultTime] = useState(getCurrentUTCTime());
  setTimeout(() => {
    setDefaultTime(getCurrentUTCTime());
  }, 1000);

  return (
    <div className="clock-container">
      {clocksArr.map((clock) => (
        <ClockItem
          key={clock.id}
          clock={clock}
          defaultTime={defaultTime}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ClockContainer;

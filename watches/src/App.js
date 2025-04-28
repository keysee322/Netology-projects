import { useState } from "react";
import "./App.css";
import ClockContainer from "./components/ClockContainer";
import ClockForm from "./components/ClockForm";

function App() {
  const [clocks, setClocks] = useState([{ id: 1, name: "Moscow", zone: 3 }]);

  const handleAddClock = (name, zone) => {
    const newClock = {
      id: Date.now(),
      name,
      zone,
    };
    setClocks((prev) => [...prev, newClock]);
  };

  const handleDelete = (id) => {
    setClocks((prev) => prev.filter((workout) => workout.id !== id));
  };

  return (
    <div className="clock-widget">
      <ClockForm AddClock={handleAddClock} />
      <ClockContainer onDelete={handleDelete} clocksArr={clocks} />
    </div>
  );
}

export default App;

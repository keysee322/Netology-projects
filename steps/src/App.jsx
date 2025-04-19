import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutTable from "./components/WorkoutTable";
import "./App.css";

const App = () => {
  const [workouts, setWorkouts] = useState([
    { id: 1, date: "20.07.2019", distance: 5.7 },
    { id: 2, date: "19.07.2019", distance: 14.2 },
    { id: 3, date: "18.07.2019", distance: 3.4 },
  ]);

  const handleAddWorkout = (date, distance) => {
    const existingIndex = workouts.findIndex(
      (workout) => workout.date === date
    );

    if (existingIndex >= 0) {
      setWorkouts((prev) =>
        prev.map((workout, index) =>
          index === existingIndex
            ? { ...workout, distance: workout.distance + distance }
            : workout
        )
      );
    } else {
      const newWorkout = {
        id: Date.now(),
        date,
        distance,
      };
      setWorkouts((prev) => [newWorkout, ...prev]);
    }
  };

  const handleDelete = (id) => {
    setWorkouts((prev) => prev.filter((workout) => workout.id !== id));
  };

  return (
    <div className="app">
      <h1>Учет тренировок</h1>
      <WorkoutForm onAddWorkout={handleAddWorkout} />
      <WorkoutTable workouts={workouts} onDelete={handleDelete} />
    </div>
  );
};

export default App;

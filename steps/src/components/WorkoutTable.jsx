import React from "react";
import WorkoutRow from "./WorkoutRow";

const WorkoutTable = ({ workouts, onDelete }) => {
  const sortedWorkouts = [...workouts].sort((a, b) => {
    const dateA = a.date.split(".").reverse().join("-");
    const dateB = b.date.split(".").reverse().join("-");
    return new Date(dateB) - new Date(dateA);
  });

  return (
    <table className="workouts-table">
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {sortedWorkouts.map((workout) => (
          <WorkoutRow key={workout.id} workout={workout} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default WorkoutTable;

import React from "react";

const WorkoutRow = ({ workout, onDelete }) => {
  return (
    <tr>
      <td>{workout.date}</td>
      <td>{workout.distance.toFixed(1)}</td>
      <td>
        <button onClick={() => onDelete(workout.id)} className="delete-btn">
          ✖
        </button>
      </td>
    </tr>
  );
};

export default WorkoutRow;

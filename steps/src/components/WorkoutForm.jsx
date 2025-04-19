import React, { useState } from "react";

const WorkoutForm = ({ onAddWorkout }) => {
  const [formData, setFormData] = useState({
    date: "",
    distance: "",
  });

  const formatDate = (dateString) => {
    const parts = dateString.split("-");
    if (parts.length === 3) {
      return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }
    return dateString;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { date, distance } = formData;
    if (!date || !distance) return;

    const distanceNum = parseFloat(distance);
    if (isNaN(distanceNum)) return;

    const formattedDate = formatDate(date);
    onAddWorkout(formattedDate, distanceNum);

    setFormData({ date: "", distance: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <div className="form-group">
        <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="distance">Пройдено км</label>
        <input
          type="number"
          id="distance"
          name="distance"
          step="0.1"
          min="0"
          value={formData.distance}
          onChange={handleInputChange}
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Добавить
      </button>
    </form>
  );
};

export default WorkoutForm;

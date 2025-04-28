import { useState } from "react";

function ClockForm({ AddClock }) {
  const [formData, setFormData] = useState({
    name: "",
    zone: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, zone } = formData;

    AddClock(name, zone);

    setFormData({ name: "", zone: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <h3>Название</h3>
        <input
          name="name"
          value={formData.name}
          type="text"
          required
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="zone">
        <h3>Временная зона</h3>
        <input
          name="zone"
          value={formData.zone}
          type="number"
          required
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default ClockForm;

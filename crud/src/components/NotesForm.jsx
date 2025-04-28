import { useState } from "react";
import send from "./../send.svg";

function NotesForm({ addNote }) {
  const [formData, setFormData] = useState([
    {
      content: "",
    },
  ]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit(e);
    }
  };

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { content } = formData;
    addNote(content);
    setFormData({
      content: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="notes-form">
      <textarea
        rows="5"
        cols="auto"
        name="content"
        value={formData.content}
        onKeyDown={handleKeyDown}
        placeholder="Нажмите Ctrl+Enter для отправки"
        onChange={handleTextareaChange}
      />
      <button type="submit">
        <img src={send} alt="Отправить" />
      </button>
    </form>
  );
}

export default NotesForm;

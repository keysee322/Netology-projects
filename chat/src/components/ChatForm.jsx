import { useState } from "react";
import send from "../send.svg";

function ChatForm({ addMessage }) {
  const [formData, setFormData] = useState([
    {
      content: "",
    },
  ]);
  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const { content } = formData;
    addMessage(content);
    setFormData({
      content: "",
    });
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.ctrlKey) handleSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <textarea
        placeholder="Нажмите Ctrl+Enter для отправки"
        name="content"
        value={formData.content}
        onChange={handleOnChange}
        resize="none"
        onKeyDown={handleKeyDown}
      ></textarea>
      <button type="submit">
        <img src={send} alt="" />
      </button>
    </form>
  );
}

export default ChatForm;

import { useEffect, useState, useRef } from "react";
import "./App.css";
import ChatContainer from "./components/ChatContainer";
import ChatForm from "./components/ChatForm";

function App() {
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      messageId: new Date(),
      uid: 1,
      content: "Первое сообщение",
    },
  ]);
  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:7070/messages");
      console.log("Данные с сервера полученны");
      if (!response.ok) throw new Error("Ошибка сервера");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages.length]);
  useEffect(() => {
    localStorage.getItem("uid") === null
      ? localStorage.setItem("uid", Math.random().toString(36).substring(2))
      : console.log("Welcome back");
    fetchMessages();
    setInterval(fetchMessages, 2000);
  }, []);

  const handleAddMessage = async (content) => {
    const newMessage = {
      uid: localStorage.getItem("uid"),
      id: new Date(),
      content: content,
    };
    try {
      await fetch("http://localhost:7070/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });
    } catch (error) {
      console.error("Ошибка:", error);
    }
    fetchMessages();
  };

  return (
    <div className="chat">
      <ChatContainer messages={messages} messagesEndRef={messagesEndRef} />
      <ChatForm addMessage={handleAddMessage} />
    </div>
  );
}

export default App;

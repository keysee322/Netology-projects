function ChatItem({ content, sender }) {
  console.log(content, "!!!");

  return (
    <div
      className={
        sender === localStorage.getItem("uid")
          ? "chat-message owner"
          : "chat-message"
      }
    >
      {content}
    </div>
  );
}

export default ChatItem;

import ChatItem from "./ChatItem";

function ChatContainer({ messages, messagesEndRef }) {
  return (
    <div className="chat-content">
      <div ref={messagesEndRef} />
      {messages
        .slice()
        .reverse()
        .map((item) => (
          <ChatItem key={item.id} content={item.content} sender={item.uid} />
        ))}
    </div>
  );
}

export default ChatContainer;

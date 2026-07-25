import React from "react";
import { FiCopy } from "react-icons/fi";

function ChatMessage({ message, onCopy }) {
  const isUser = message.role === "user";

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`chat-message ${isUser ? "user" : "assistant"}`}>
      {!isUser && (
        <div className="avatar ai-avatar">
          🤖
        </div>
      )}

      <div className="message-content">
        <div className="message-header">
          <span className="message-author">
            {isUser ? "You" : "PortfolioAI"}
          </span>

          <span className="message-time">
            {time}
          </span>
        </div>

        <div className="message-bubble">

          {!isUser && (
            <button
              className="copy-icon-btn"
              onClick={() => onCopy(message.content)}
              title="Copy"
            >
              <FiCopy size={16} />
            </button>
          )}

          <pre>{message.content}</pre>

        </div>
      </div>

      {isUser && (
        <div className="avatar user-avatar">
          👤
        </div>
      )}
    </div>
  );
}

export default ChatMessage;
function TypingIndicator() {
  return (
    <div className="chat-message assistant">
      <div className="avatar ai-avatar">
        🤖
      </div>

      <div className="message-content">
        <div className="message-header">
          <span className="message-author">
            PortfolioAI
          </span>

          <span className="message-status">
            Thinking...
          </span>
        </div>

        <div className="message-bubble typing-bubble">
          <div className="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;
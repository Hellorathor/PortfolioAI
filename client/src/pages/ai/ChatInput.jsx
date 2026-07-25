import { useRef } from "react";

function ChatInput({
  prompt,
  setPrompt,
  onSend,
  loading,
}) {
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setPrompt(e.target.value);

    const textarea = textareaRef.current;

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (!prompt.trim() || loading) return;

      onSend();
    }
  };

  const handleSend = () => {
    if (!prompt.trim() || loading) return;

    onSend();

    if (textareaRef.current) {
      textareaRef.current.style.height = "60px";
    }
  };

  return (
    <div className="chat-input-wrapper">

      <div className="chat-input-box">

        <textarea
          ref={textareaRef}
          rows={1}
          value={prompt}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Message PortfolioAI..."
        />

        <button
          onClick={handleSend}
          disabled={loading || !prompt.trim()}
          title="Send"
        >
          {loading ? (
            "..."
          ) : (
            "➤"
          )}
        </button>

      </div>

      {/* <p className="chat-footer-text">
        PortfolioAI can make mistakes. Verify important information before using it.
      </p> */}

    </div>
  );
}

export default ChatInput;
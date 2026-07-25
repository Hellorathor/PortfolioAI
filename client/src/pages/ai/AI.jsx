import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import "../../assets/css/pages/ai.css";

import { aiChat } from "../../services/aiService.js";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import WelcomeScreen from "./WelcomeScreen";
import TypingIndicator from "./TypingIndicator";

function AI() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  // Keep your old output state for Copy button compatibility
  const [output, setOutput] = useState("");

  // New chat history
  const [messages, setMessages] = useState([]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const copyContent = (text = output) => {
    navigator.clipboard.writeText(text);
    toast.success("Content copied successfully.");
  };

  const clearChat = () => {
    setMessages([]);
    setOutput("");
    setPrompt("");
  };

  const addConversation = (userPrompt, aiResponse) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userPrompt,
      },
      {
        role: "assistant",
        content: aiResponse,
      },
    ]);
  };

const handleGenerate = async () => {
  if (!prompt.trim()) {
    toast.error("Please enter your message.");
    return;
  }

  const userMessage = prompt;

  try {
    setLoading(true);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setPrompt("");

    const response = await aiChat({
      message: userMessage,
    });

    const aiResponse = response.reply;

    setOutput(aiResponse);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: aiResponse,
      },
    ]);
  } catch (error) {
    console.error(error);

    const errorMessage =
      error.response?.data?.message ||
      "Something went wrong.";

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: errorMessage,
      },
    ]);
  } finally {
    setLoading(false);
  }
};
    return (
    <div className="ai-page">

      {/* Header */}

      <div className="ai-topbar">

        <div>
          <h1>PortfolioAI Assistant</h1>
         <p>
          Ask anything about programming, portfolios, resumes,
          careers, projects, interviews, or software development.
         </p>
        </div>

        {messages.length > 0 && (
          <button
            className="clear-chat-btn"
            onClick={clearChat}
          >
            Clear Chat
          </button>
        )}

      </div>

      {/* Chat Area */}

      <div className="chat-container">

        {messages.length === 0 ? (

          <WelcomeScreen
            onPromptClick={(text) => {
              setPrompt(text);
            }}
          />

        ) : (

          <div className="messages-container">

            {messages.map((message, index) => (

              <ChatMessage
                key={index}
                message={message}
                onCopy={copyContent}
              />

            ))}

            {loading && <TypingIndicator />}

            <div ref={chatEndRef}></div>

          </div>

        )}

      </div>

      {/* Input */}

      <ChatInput
      prompt={prompt}
      setPrompt={setPrompt}
      loading={loading}
      onSend={handleGenerate}
     />

    </div>
  );
}

export default AI;
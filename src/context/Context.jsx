import { createContext, useState } from "react";
import PropTypes from "prop-types";
import runChat from "../config/gemini";

export const Context = createContext();

const INITIAL_GREETING = {
  sender: "bot",
  text: "Halo! Saya **Imam Agus Faisal** (versi AI). Senang bertemu dengan Anda! Ada yang ingin Anda ketahui seputar pengalaman kerja, proyek Machine Learning, atau keahlian teknis saya?",
  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [chatHistory, setChatHistory] = useState([INITIAL_GREETING]);

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setInput("");
    setResultData("");
    setChatHistory([
      {
        ...INITIAL_GREETING,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const onSent = async (prompt) => {
    const userPrompt = (prompt ?? input).trim();
    if (!userPrompt || loading) return;

    setInput("");
    setResultData("");
    setLoading(true);
    setShowResult(true);

    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // Snapshot current history before adding the new user message
    const previousHistory = [...chatHistory];

    // Add user message to UI state immediately
    const newUserMsg = { sender: "user", text: userPrompt, time: currentTime };
    setChatHistory((prev) => [...prev, newUserMsg]);
    setRecentPrompt(userPrompt);
    setPrevPrompts((prev) => [...prev, userPrompt]);

    try {
      const response = await runChat(userPrompt, previousHistory);
      const botTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      setChatHistory((prev) => [
        ...prev,
        { sender: "bot", text: response, time: botTime },
      ]);
      setResultData(response);
    } catch {
      const errorMsg = "Maaf, terjadi kesalahan saat memproses respon.";
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "bot",
          text: errorMsg,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setResultData(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
    chatHistory,
    setChatHistory,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;

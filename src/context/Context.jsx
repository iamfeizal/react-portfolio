import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPromts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", text: "Halo, ada yang bisa saya bantu?" }
  ]);

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setChatHistory([
      { sender: "bot", text: "Halo, ada yang bisa saya bantu?" }
    ]);
  };

  const onSent = async (prompt) => {
    setLoading(true);
    setShowResult(true);
    setResultData(""); // clear temp result text

    const userPrompt = prompt ?? input;

    // Simpan prompt ke history
    setChatHistory((prev) => [...prev, { sender: "user", text: userPrompt }]);
    setRecentPrompt(userPrompt);
    setPrevPromts((prev) => [...prev, userPrompt]);

    try {
      const response = await runChat(userPrompt);

      // Simpan response dari bot
      setChatHistory((prev) => [...prev, { sender: "bot", text: response }]);
      setResultData(response);
    } catch (error) {
      const errorMsg = "Terjadi kesalahan saat memproses permintaan.";
      setChatHistory((prev) => [...prev, { sender: "bot", text: errorMsg }]);
      setResultData(errorMsg);
    }

    setInput("");
    setLoading(false);
  };

  const contextValue = {
    prevPrompts,
    setPrevPromts,
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

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

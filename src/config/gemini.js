import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { buildSystemInstruction } from "../constants/impersonatorKnowledge";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Fallback gracefully if API key is not yet configured
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const generationConfig = {
  temperature: 0.7,
  topP: 0.9,
  topK: 40,
  maxOutputTokens: 2048,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

/**
 * Format UI chat history to Gemini SDK chat history format.
 * Ensures turn order begins with a 'user' message.
 */
function formatHistoryForGemini(chatHistory = []) {
  const formatted = [];

  for (const msg of chatHistory) {
    if (!msg.text) continue;
    const role = msg.sender === "user" ? "user" : "model";

    // Gemini requires the first message in history to be from 'user'
    if (formatted.length === 0 && role !== "user") {
      continue;
    }

    formatted.push({
      role,
      parts: [{ text: msg.text }],
    });
  }

  // Ensure history does not end with a user turn before sending a new user message
  if (formatted.length > 0 && formatted[formatted.length - 1].role === "user") {
    formatted.pop();
  }

  return formatted;
}

/**
 * Executes a multi-turn chat interaction with Gemini as Imam's persona.
 * @param {string} prompt - Current user message
 * @param {Array} previousHistory - Array of { sender: 'user' | 'bot', text: string }
 * @returns {Promise<string>}
 */
async function runChat(prompt, previousHistory = []) {
  if (!apiKey || !genAI) {
    return (
      "⚠️ **VITE_GEMINI_API_KEY belum dikonfigurasi.**\n\n" +
      "Silakan tambahkan API key Anda ke dalam file `.env` di root project:\n" +
      "```env\nVITE_GEMINI_API_KEY=your_gemini_api_key\n```\n" +
      "Lalu restart dev server (`npm run dev`)."
    );
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash-lite",
      systemInstruction: buildSystemInstruction(),
    });

    const geminiHistory = formatHistoryForGemini(previousHistory);

    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: geminiHistory,
    });

    const result = await chatSession.sendMessage(prompt);
    const responseText = result.response.text();
    return responseText;
  } catch (error) {
    console.error("Gemini Impersonator Error:", error);
    return "Maaf, terjadi kendala saat menghubungi server AI. Silakan coba kirim pesan kembali dalam beberapa saat.";
  }
}

export default runChat;
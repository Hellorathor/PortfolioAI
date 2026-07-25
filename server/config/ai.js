import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const ai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export default ai;
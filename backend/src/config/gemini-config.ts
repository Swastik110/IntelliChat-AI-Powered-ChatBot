import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config({
  path: "./.env",
});

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY as string
);

export default genAI;
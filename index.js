import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  const modelAI = generativeAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = "Realiza un resumen de mi pelicula favorita Harry Potter y la Cámara de los Secretos";

  const result = await modelAI.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
}

run();

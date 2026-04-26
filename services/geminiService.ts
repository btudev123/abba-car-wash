import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';
import { SERVICES } from '../constants';

const API_KEY = process.env.API_KEY || '';

// System instruction to guide the AI's behavior
const SYSTEM_INSTRUCTION = `
You are "AbbaBot", the friendly and professional AI concierge for Abba Car Wash.
Your goal is to help customers understand our services, pricing, and assist them with booking information.

Here is our Service Menu:
${SERVICES.map(s => `- ${s.name} ($${s.price}): ${s.description} (Duration: ${s.duration})`).join('\n')}

Key Information:
- Location: 123 Sparkling Ave, Clean City, CA.
- Hours: Mon-Sat 8am - 6pm, Sun 10am - 4pm.
- We use eco-friendly products.
- Appointments are recommended for details, walk-ins welcome for express washes.

Tone: Helpful, polite, knowledgeable, and concise.
If a user wants to book, guide them to the booking form on the page (tell them to scroll up or click the "Book Now" button).
Do not try to process the booking yourself, just provide information.
`;

let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
    if (!ai) {
        ai = new GoogleGenAI({ apiKey: API_KEY });
    }
    return ai;
};

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
    try {
        if (!API_KEY) {
            return "I'm currently offline (API Key missing). Please contact the shop directly.";
        }

        const client = getAIClient();
        
        // Construct the chat history for the model
        // Note: Gemini 3 Flash is great for this.
        const chat = client.chats.create({
            model: 'gemini-3-flash-preview',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            },
            history: history.map(msg => ({
                role: msg.role,
                parts: [{ text: msg.text }]
            }))
        });

        const response: GenerateContentResponse = await chat.sendMessage({
            message: newMessage
        });

        return response.text || "I'm sorry, I didn't quite catch that. Could you rephrase?";

    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I'm having trouble connecting to the server right now. Please try again later.";
    }
};

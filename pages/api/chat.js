const model = require('../../utils/gemini');

export default async function handler(req, res) {
    const { messages } = req.body;
    const userMessage = messages[messages.length - 1].content;

    try {
        const prompt = `You are a customer support representative for a car dealership. Your role is to assist customers with inquiries about car models, prices, financing options, services, and other related questions. Always respond in a professional and helpful manner. Here is the customer's message: "${userMessage}"`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const replyContent = response.text();

        const reply = { role: 'assistant', content: replyContent };
        res.status(200).json({ reply });
    } catch (error) {
        console.error('Error in API route:', error.message);
        res.status(500).json({ error: error.message });
    }
}

const model = require('../../utils/gemini');
const vehicles = require('../../utils/vehicleModels');

const generateVehicleList = (category) => {
    return vehicles[category]
        .map(car => `* **${car.make} ${car.model}**: ${car.mpg} (Features: ${car.features}, Colors: ${car.colors.join(', ')})`)
        .join('\n');
};

export default async function handler(req, res) {
    const { messages } = req.body;
    const userMessage = messages[messages.length - 1].content.toLowerCase();

    try {
        let prompt = `
            You are a customer support representative for a car dealership. Your role is to assist customers with inquiries about car models, prices, financing options, services, and other related questions. Always respond in a professional and helpful manner.
            Conversation so far:
            ${messages.map(msg => `${msg.role === 'user' ? 'Customer' : 'You'}: ${msg.content}`).join('\n')}
            Based on the above conversation, respond to the customer's last message appropriately.
            Customer: "${userMessage}"
        `;

        // Determine the category of vehicles the user is asking about and append relevant examples to the prompt
        if (/fuel efficient/i.test(userMessage) && /sedan/i.test(userMessage)) {
            prompt += `
                Here are some of our most fuel-efficient sedans:
                ${generateVehicleList('sedans')}
            `;
        } else if (/suv/i.test(userMessage)) {
            prompt += `
                Here are some of our popular SUVs:
                ${generateVehicleList('suvs')}
            `;
        } else if (/truck/i.test(userMessage)) {
            prompt += `
                Here are some of our best trucks:
                ${generateVehicleList('trucks')}
            `;
        } else if (/sports car/i.test(userMessage)) {
            prompt += `
                Here are some of our top sports cars:
                ${generateVehicleList('sports')}
            `;
        } else if (/luxury/i.test(userMessage)) {
            prompt += `
                Here are some of our luxury cars:
                ${generateVehicleList('luxury')}
            `;
        } // Add more conditions as needed

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

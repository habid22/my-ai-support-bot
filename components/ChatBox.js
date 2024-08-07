import { useState } from 'react';
import ChatMessage from './ChatMessage';
import styles from '../public/styles/ChatBox.module.css';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await response.json();
            console.log('Response from API:', data);

            if (data.reply) {
                setMessages([...newMessages, data.reply]);
            } else {
                console.error('No reply in response data:', data);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className={styles.chatBox}>
            <div className={styles.messages}>
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg} />
                ))}
            </div>
            <input
                type="text"
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
            />
            <button className={styles.button} onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatBox;

import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, Paper, Typography } from '@mui/material';
import ChatMessage from './ChatMessage';

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
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '70vh', 
                maxWidth: '600px', 
                margin: '0 auto', 
                border: 1, 
                borderRadius: 2, 
                overflow: 'hidden', 
                backgroundColor: '#f5f5f5',
                boxShadow: 3 
            }}
        >
            <List sx={{ flex: 1, padding: 2, overflowY: 'scroll' }}>
                {messages.map((msg, index) => (
                    <ListItem key={index} sx={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                        <ChatMessage message={msg} />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', padding: 1, borderTop: 1, borderColor: '#ccc', backgroundColor: '#fff' }}>
                <TextField
                    variant="outlined"
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    sx={{ marginRight: 1, borderRadius: 2 }}
                />
                <Button variant="contained" color="primary" onClick={sendMessage} sx={{ borderRadius: 2 }}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatBox;

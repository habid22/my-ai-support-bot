import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
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

    const endSession = () => {
        setMessages([...messages, { role: 'system', content: 'Session Ended' }]);
    };

    const newSession = () => {
        window.location.reload();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '80vh',
                maxWidth: '500px',
                margin: '0 auto',
                border: 1,
                borderRadius: 2,
                overflow: 'hidden',
                backgroundColor: '#f5f5f5',
                boxShadow: 3,
                fontFamily: 'Roboto, sans-serif',
            }}
        >
            <List sx={{ flex: 1, padding: 2, overflowY: 'scroll' }}>
                {messages.map((msg, index) => (
                    <ListItem key={index} sx={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                        {msg.role === 'system' ? (
                            <Typography variant="caption" sx={{ color: '#888' }}>
                                {msg.content}
                            </Typography>
                        ) : (
                            <ChatMessage message={msg} />
                        )}
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
                    sx={{ marginRight: 1, borderRadius: 2, fontFamily: 'Roboto, sans-serif' }}
                />
                <Button variant="contained" color="primary" onClick={sendMessage} sx={{ borderRadius: 2, minWidth: '50px', padding: '10px' }}>
                    <SendIcon />
                </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 1, borderTop: 1, borderColor: '#ccc', backgroundColor: '#fff' }}>
                <Button variant="contained" color="secondary" onClick={endSession} sx={{ borderRadius: 2 }}>
                    End Session
                </Button>
                <Button variant="contained" color="primary" onClick={newSession} sx={{ borderRadius: 2 }}>
                    New Session
                </Button>
            </Box>
        </Box>
    );
};

export default ChatBox;

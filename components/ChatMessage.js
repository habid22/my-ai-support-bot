import React from 'react';
import { Paper, Typography } from '@mui/material';

const ChatMessage = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <Paper 
            elevation={3} 
            sx={{ 
                maxWidth: '80%', 
                padding: 1, 
                borderRadius: 2, 
                backgroundColor: isUser ? '#007aff' : '#e5e5ea', 
                color: isUser ? '#fff' : '#000',
                alignSelf: isUser ? 'flex-end' : 'flex-start',
                borderBottomRightRadius: isUser ? 0 : 2,
                borderBottomLeftRadius: isUser ? 2 : 0
            }}
        >
            <Typography variant="body1">{message.content}</Typography>
        </Paper>
    );
};

export default ChatMessage;

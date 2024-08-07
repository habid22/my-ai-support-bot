import React from 'react';
import { Paper } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChatMessage = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <Paper 
            elevation={3} 
            sx={{ 
                maxWidth: '70%', 
                padding: '8px 12px', 
                borderRadius: '15px', 
                backgroundColor: isUser ? '#007aff' : '#e5e5ea', 
                color: isUser ? '#fff' : '#000',
                alignSelf: isUser ? 'flex-end' : 'flex-start',
                borderBottomRightRadius: isUser ? '0' : '15px',
                borderBottomLeftRadius: isUser ? '15px' : '0',
                whiteSpace: 'pre-wrap',
                margin: '4px 0',
                fontFamily: 'Roboto, sans-serif'
            }}
        >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
            </ReactMarkdown>
        </Paper>
    );
};

export default ChatMessage;

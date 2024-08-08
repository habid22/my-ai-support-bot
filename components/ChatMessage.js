import React from 'react';
import { Paper, Avatar, Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChatMessage = ({ message }) => {
    const isUser = message.role === 'user';
    const botAvatarSrc = '/robot-avatar.png'; // Path to the image in the public directory

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: isUser ? 'row-reverse' : 'row',
                alignItems: 'center',
                marginBottom: '8px',
            }}
        >
            {!isUser && (
                <Avatar
                    src={botAvatarSrc}
                    sx={{
                        marginRight: isUser ? 0 : '8px',
                        marginLeft: isUser ? '8px' : 0,
                        width: 40,
                        height: 40,
                    }}
                />
            )}
            <Paper
                elevation={3}
                sx={{
                    maxWidth: '90%',
                    padding: '8px 12px',
                    borderRadius: '15px',
                    backgroundColor: isUser ? '#007aff' : '#e5e5ea',
                    color: isUser ? '#fff' : '#000',
                    borderBottomRightRadius: isUser ? '0' : '15px',
                    borderBottomLeftRadius: isUser ? '15px' : '0',
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
            </Paper>
        </Box>
    );
};

export default ChatMessage;

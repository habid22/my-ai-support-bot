import styles from '../public/styles/ChatBox.module.css';

const ChatMessage = ({ message }) => {
    if (!message || !message.role) {
        return null;
    }
    
    const messageClass = message.role === 'user' ? styles.messageUser : styles.messageAssistant;

    return (
        <div className={messageClass}>
            <p>{message.content}</p>
        </div>
    );
};

export default ChatMessage;

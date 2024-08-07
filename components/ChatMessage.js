import styles from '../public/styles/ChatBox.module.css';

const ChatMessage = ({ message }) => {
    const messageClass = message.role === 'user' ? styles.userMessage : styles.assistantMessage;

    return (
        <div className={`${styles.message} ${messageClass}`}>
            <p>{message.content}</p>
        </div>
    );
};

export default ChatMessage;

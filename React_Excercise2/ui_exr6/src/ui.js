import React, { useEffect, useRef, useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  // Scroll to the bottom of the chat container
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Simulate incoming messages
  useEffect(() => {
    const mockMessages = [
      'Hi there!',
      'How are you?',
      'This is a real-time chat simulation.',
      'Every new message scrolls to the bottom.',
      'Cool, right?',
      'Let’s keep chatting!',
      'Another one coming...',
      'Just making sure auto-scroll works.',
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < mockMessages.length) {
        setMessages((prev) => [...prev, mockMessages[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Scroll to latest message every time messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div style={styles.container}>
      <h2>💬 Chat</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div key={i} style={styles.message}>{msg}</div>
        ))}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    fontFamily: 'Arial, sans-serif',
  },
  chatBox: {
    border: '1px solid #ccc',
    padding: '1rem',
    height: '300px',
    overflowY: 'auto',
    background: '#f9f9f9',
  },
  message: {
    background: '#e0e0e0',
    padding: '0.5rem',
    borderRadius: '5px',
    marginBottom: '0.5rem',
    maxWidth: '80%',
  },
};

export default Chat;

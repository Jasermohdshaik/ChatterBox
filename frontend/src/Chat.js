import React, { useEffect, useState, useCallback } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = useCallback(async () => {
    if (currentMessage.trim()) {
      const messageData = {
        room,
        author: username,
        message: currentMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      await socket.emit("send_message", messageData);
      setMessageList((prevList) => [...prevList, messageData]);
      setCurrentMessage("");
    }
  }, [currentMessage, room, socket, username]);

  useEffect(() => {
    const messageHandler = (data) => {
      setMessageList((prevList) => [...prevList, data]);
    };

    socket.on("receive_message", messageHandler);

    return () => socket.off("receive_message", messageHandler);
  }, [socket]);

  return (
    <div className="chat-window">
      <header className="chat-header">
        <h2>Live Chat</h2>
      </header>
      <main className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => (
            <article
              key={`${messageContent.author}-${messageContent.time}-${index}`}
              className={`message ${
                username === messageContent.author ? "you" : "other"
              }`}
            >
              <div className="message-content">
                <p>{messageContent.message}</p>
              </div>
              <footer className="message-meta">
                <time>{messageContent.time}</time>
                <span>{messageContent.author}</span>
              </footer>
            </article>
          ))}
        </ScrollToBottom>
      </main>
      <footer className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type your message..."
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} aria-label="Send message">
          ➤
        </button>
      </footer>
    </div>
  );
};

export default Chat;

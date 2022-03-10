import MessageForm from "./MessageForm";
import ReceiverMessages from "./ReceiverMessage";
import SenderMessage from "./SenderMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isSenderMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isSenderMessage ? 
              <SenderMessage message={message} />
             : 
              <ReceiverMessages
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            }
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isSenderMessage ? "18px" : "0px",
              marginLeft: isSenderMessage ? "0px" : "68px",
            }}
          >
            bzzzzzzzzzzzzzz
          </div>
        </div>
      );
    });
  };

  if(!chat) return "Loading...";
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((sub) => `${sub.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="messages-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

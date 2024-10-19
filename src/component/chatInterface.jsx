import ChatHeader from "./chatHeader";
import ChatSection from "./chatSection";
import styles from "./chatInterface.module.css";

const ChatInterface = () => {
  return (
    <div className={`${styles["chatInterface"]}`}>
      {/* header */}
      <ChatHeader />
      {/* chat section */}
      <ChatSection />
    </div>
  );
};

export default ChatInterface;




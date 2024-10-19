import BotChat from "./botchat";
import UserChat from "./userchat";
import styles from "./chatSection.module.css";
import { IoIosSend } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../store/chatSlice";
import ChatWithMango from "./chatwithMango";

const ChatSection = () => {
  const scrollRef = useRef();
  const [gettingReply, setGettingReply] = useState(false);
  // Mock bot replies
  const botReplies = [
    "Bot reply 1",
    "Bot reply 2",
    "Bot reply 3",
    "Bot reply 4",
    "Bot reply 5",
  ];

  const dispatch = useDispatch();
  const userMessage = useRef();

  //  handle click finctionality for send button
  const handleClick = () => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString("en-US", options);
    const Message = userMessage.current.value;
    if (Message) {
      setGettingReply(true);
      dispatch(
        chatActions.addUserMessage({
          user: Message,
          bot: "",
          date: date,
          time: time,
        })
      );
      const randomIndex = Math.floor(Math.random() * botReplies.length);

      setTimeout(() => {
        dispatch(chatActions.addBotMessage({ msg: botReplies[randomIndex] }));

        setGettingReply(false);
      }, 2000);

      userMessage.current.value = "";
    } else {
      alert("Enter Message");
    }
  };

  const chat = useSelector((store) => store.chat);
  console.log(chat.length);
  // UseEffect to make sure user is always scrolled to recent message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div className={`${styles["chatSection"]}`}>
      {/* display chats */}
      {chat.length === 0 ? (
        <div className={`${styles["chatSection_chat"]}`} ref={scrollRef}>
          <ChatWithMango />
        </div>
      ) : (
        <div className={`${styles["chatSection_chat"]}`} ref={scrollRef}>
          {chat.map((item) => (
            <div>
              <UserChat text={item.user} date={item.date} time={item.time} />
              <BotChat text={item.bot} date={item.date} time={item.time} />
            </div>
          ))}
        </div>
      )}

      {/* display input box */}
      <div className={`${styles["chatText"]}`}>
        <textarea
          className={`${styles["chatSection_text"]}`}
          placeholder="Chat with Mango"
          ref={userMessage}
        >
          {" "}
        </textarea>
        <button
          className={`${styles["chatSection_button"]}`}
          onClick={handleClick}
          disabled={gettingReply}
        >
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default ChatSection;

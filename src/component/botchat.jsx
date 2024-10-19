import styles from "./botchat.module.css";
const BotChat = ({ text, time, date }) => {
  return (
    <div className={`${styles["botchat"]}`}>
      {text ? (
        <div className={`${styles["botchat_text"]}`}>
          <p>{text}</p>
          <p className={`${styles["botchat_timestamps"]}`}>
            {time} | {date}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BotChat;

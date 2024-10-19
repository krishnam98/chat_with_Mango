import styles from "./userchat.module.css";
const UserChat = ({ text, date, time }) => {
  return (
    <div className={`${styles["userchat"]}`}>
      <div className={`${styles["userchat_text"]}`}>
        <p>{text}</p>
        <p className={`${styles["user_timestaps"]}`}>
          {time} | {date}
        </p>
      </div>
    </div>
  );
};

export default UserChat;

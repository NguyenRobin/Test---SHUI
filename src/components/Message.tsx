import styles from '../styles/Message.module.css';

type Props = {
  date: string;
  message: string;
  user: string;
};
function Message({ date, message, user }: Props) {
  return (
    <div className={styles.Message}>
      <p className={styles.Date}>{date}</p>
      <p className={styles.MessageText}>{message}</p>
      <p className={styles.Username}>@{user}</p>
    </div>
  );
}

export default Message;

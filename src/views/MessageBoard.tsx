import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Message from '../components/Message';
import styles from '../styles/MessageBoard.module.css';
import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/store';

function MessageBoard() {
  const messages = useSelector((store: GlobalState) => store.data);
  const navigate = useNavigate();

  function goToNewMessage() {
    navigate('/new-message');
  }

  return (
    <div className={styles.MessageBoard}>
      <ul data-test-id="messages-array">
        {messages.map((data) => (
          <Message
            key={data.message}
            date={data.date}
            message={data.message}
            user={data.user}
          />
        ))}
      </ul>
      <Button onClick={() => goToNewMessage()} />
    </div>
  );
}

export default MessageBoard;

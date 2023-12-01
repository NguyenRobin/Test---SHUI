import { useDispatch } from 'react-redux';
import styles from '../styles/NewMessage.module.css';
import { Message, addNewMessage } from '../redux/store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewMessage() {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isDisabled =
    message.length < 2 ||
    message === '' ||
    username.length < 2 ||
    username === ''
      ? true
      : false;

  function handleChangeMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }

  function handleChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const date = new Date().toLocaleDateString();
    const newMessage: Message = { date, message, user: username };

    dispatch(addNewMessage(newMessage));

    navigate('/');
    setMessage('');
    setUsername('');
  }

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <div className={styles.NewMessage}>
        <textarea
          placeholder="message..."
          maxLength={280}
          onChange={handleChangeMessage}
        ></textarea>
      </div>

      <div className={styles.UsernameAndBtnSection}>
        <div className={styles.UsernameSection}>
          <input
            type="text"
            placeholder="username"
            maxLength={50}
            value={username}
            onChange={handleChangeUsername}
          />
        </div>

        <div className={styles.ButtonSection}>
          <button onClick={handleSubmit} disabled={isDisabled}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewMessage;

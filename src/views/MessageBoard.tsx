import Button from '../components/Button';
import Message from '../components/Message';
import styles from '../styles/MessageBoard.module.css';
type MessagesData = {
  date: string;
  message: string;
  user: string;
}[];

const fakeData: MessagesData = [
  {
    date: 'måndag 3 Nov, 09:23',
    message:
      'Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga.',
    user: 'jagarrobin',
  },
  {
    date: 'måndag 3 Nov, 12:21',
    message:
      'ICA Trumpenten har stängt, jag repeterar. ICA Trumpenten har spelat sitt susta tut! Var försiktiga där ute, detta håller på att balla ur!',
    user: 'jagarrobin',
  },
  {
    date: '2012-232-2',
    message: 'bla testtestest bla',
    user: 'jagArLobin',
  },
  {
    date: '2012-232-2fdfd',
    message: 'bla testtestedfdfst bla',
    user: 'jagArLobin',
  },
  {
    date: '2012-232-2dd',
    message: 'bla testtdfdfdestest bla',
    user: 'jagArLobin',
  },
];

function MessageBoard() {
  return (
    <div className={styles.MessageBoard}>
      <ul>
        {fakeData.map((message) => (
          <Message
            key={message.message}
            date={message.date}
            message={message.message}
            user={message.user}
          />
        ))}
      </ul>
      <Button onClick={() => console.log('first')} />
    </div>
  );
}

export default MessageBoard;

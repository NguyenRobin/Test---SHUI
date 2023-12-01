import styles from '../styles/Button.module.css';
import { GrEdit } from 'react-icons/gr';

type Props = {
  onClick: () => void;
};

function Button({ onClick }: Props) {
  return (
    <button className={styles.Button} onClick={onClick}>
      <span>
        <GrEdit size={40} color="#fff" />
      </span>
    </button>
  );
}

export default Button;

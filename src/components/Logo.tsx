import { useNavigate } from 'react-router-dom';
import styles from '../styles/Logo.module.css';
function Logo() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate('/');
  }
  return (
    <header className={styles.Logo} onClick={handleOnClick}>
      <span>S</span>
    </header>
  );
}

export default Logo;

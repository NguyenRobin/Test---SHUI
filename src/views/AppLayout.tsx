import Logo from '../components/Logo';
import styles from '../styles/AppLayout.module.css';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <Logo />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

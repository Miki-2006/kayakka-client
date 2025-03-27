import styles from "./header.module.css";
import { useNavigate } from "react-router";

const Header = ({user}) => {
  const navigate = useNavigate()

  const clickHandle = () => {
    navigate("/dashboard")
  }

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.tytle}> Kayakka</h1>
        <nav className={styles.nav}>
          {
            user !== null
            ?
            <div className={styles.circle} onClick={clickHandle}>{user?.f_name?.charAt(0)?.toUpperCase()}</div>
            :
            <a className={styles.link} href="/login">Войти </a>
          }
        </nav>
      </div>
    </header>
  );
};

export default Header;

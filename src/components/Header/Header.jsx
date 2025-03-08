import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.tytle}> Kayakka</h1>
        <nav className={styles.nav}>
          <a className={styles.link} href="/login">Войти </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

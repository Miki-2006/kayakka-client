import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <p className={styles.text}>Свяжитесь с нами</p>
          <p>
            Email:{" "}
            <a href="mailto:kayakka@gmail.com" className={styles.link}>
              kayakka@gmail.com
            </a>
          </p>
          <p>
            Телефон:{" "}
            <a href="tel:+996551007746" className={styles.link}>
              +996551007746
            </a>
          </p>
        </div>
        <div className={styles.left}>
          <b className={styles.title}>Kayakka</b>

          <div className={styles.socials}>
            <a
              href="https://wa.link/rz1nxf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSquareWhatsapp}
                className={styles.whatsapp}
              />
            </a>
            <a
              href="https://t.me/mirlanrysbekov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegram} className={styles.telegram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

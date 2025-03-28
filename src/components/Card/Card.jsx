import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faMoneyBill1,
  faTicket,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ el }) => {
  console.log(el.id === 28 ? el.image : '');
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    return date.toLocaleString("en-US", options).replace(",", " •");
  };

  return (
    <div className={styles.card}>
      <img src={el.image} alt={el.title} />
      <div className={styles.card_bottom}>
        <div className={styles.event}>
          <FontAwesomeIcon
            icon={faTicket}
            style={{ color: "#4a90e2", fontSize: "18px" }}
          />
          <b className={styles.title}>{el.title}</b>
        </div>
        <div className={styles.money}>
          <FontAwesomeIcon
            icon={faMoneyBill1}
            style={{ color: "#4a90e2", fontSize: "18px" }}
          />
          <span className={styles.price}>{el.price === 1 ? "Бесплатно!": el.price}</span>
        </div>
        <div className={styles.date}>
          <FontAwesomeIcon
            icon={faCalendarDays}
            style={{ color: "#4a90e2", fontSize: "18px" }}
          />
          <span>{formatDate(el.event_date)}</span>
        </div>
        <div className={styles.location}>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ color: "#4a90e2", fontSize: "18px" }}
          />
          <span>{el.venue}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

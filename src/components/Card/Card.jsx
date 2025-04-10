import styles from "./card.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faMoneyBill1,
  faTicket,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Card = ({ el }) => {
  const [image, setImage] = useState(null);

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

  useEffect(() => {
    const fetchImageFromStorage = async (title) => {
      try {
        const res = await axios.get(
          `https://kayakka-server.vercel.app/api/images/${title}.jpg`,
          { responseType: "blob" }
        );
        const url = URL.createObjectURL(res.data);        
        setImage(url);
      } catch (err) {
        console.error("Ошибка при запросе изображения");
      }

    };
    fetchImageFromStorage(el.title)
  }, [el.title]);

  return (
    <div className={styles.card}>
      <img src={image ? image : ''} alt={el.title} />
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
          <span className={styles.price}>
            {el.price === 1 ? "Бесплатно!" : el.price}
          </span>
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

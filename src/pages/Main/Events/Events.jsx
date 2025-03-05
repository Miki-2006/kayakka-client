import axios from "axios";
import styles from "./events.module.css";
import { useEffect, useState } from "react";
import Card from "../../../components/Card/Card"

const Events = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        await axios
          .get("https://kayakka-server.vercel.app/api/events")
          .then((res) => setEvents(res.data));
      } catch (err) {
        console.error("Ошибка при получении данных от сервера:", err);
      }
    };

    getAllEvents();
  }, []);
  return (
    <div className={styles.events}>
      {
        events && events.map((el, indx) => (
          <Card el={el} key={indx}/>
        ))
      }
    </div>
  );
};

export default Events;

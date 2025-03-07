import axios from "axios";
import styles from "./events.module.css";
import { useEffect } from "react";
import Card from "../../../components/Card/Card"
import { useDispatch, useSelector } from "react-redux";
import { fetchEventsFailure, fetchEventsStart, fetchEventsSuccess } from "../../../features/eventSlice";

const Events = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);

  useEffect(() => {
    const getAllEvents = async () => {
      dispatch(fetchEventsStart())
      try {
        const data = await axios
          .get("https://kayakka-server.vercel.app/api/events")
          .then((res) => res.data);
        dispatch(fetchEventsSuccess(data))
      } catch (err) {
        console.error("Ошибка при получении данных от сервера:", err);
        dispatch(fetchEventsFailure(err.message))
      }
    };

    getAllEvents();
  }, [dispatch]);
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

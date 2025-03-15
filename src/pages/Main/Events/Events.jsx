import axios from "axios";
import styles from "./events.module.css";
import { useEffect } from "react";
import Card from "../../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEventsFailure,
  fetchEventsStart,
  fetchEventsSuccess,
} from "../../../features/eventsSlice";
import { Link } from "react-router";
import Sceleton from "../../../loaders/Sceleton";

const Events = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const {events, loading} = useSelector((state) => state.events);

  useEffect(() => {
    const getEventsByCategory = async () => {
      dispatch(fetchEventsStart());
      try {
        const url = selectedCategory
          ? `https://kayakka-server.vercel.app/api/events/sort?category=${selectedCategory}` // запрос с категорией
          : "https://kayakka-server.vercel.app/api/events"; // запрос без фильтрации
        const data = await axios.get(url).then((res) => res.data);
        dispatch(fetchEventsSuccess(data));
      } catch (err) {
        console.error("Ошибка при получении данных от сервера:", err);
        dispatch(fetchEventsFailure(err.message));
      }
    };

    getEventsByCategory();
  }, [dispatch, selectedCategory]); // перезапускать запрос при изменении категории

  if(loading) return <div className={styles.sceleton}><Sceleton/></div>

  return (
    <div className={styles.events}>
      {events && events.map((el, indx) => (
        <Link key={indx} to={`/event/${el.id}`} style={{textDecoration:"none"}}><Card el={el} /></Link>
      ))}
    </div>
  );
};

export default Events;

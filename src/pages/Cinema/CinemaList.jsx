import { useState, useEffect } from "react";
import styles from "./cinema.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const CinemaList = () => {
  const [cinemas, setCinemas] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getCinemas = async () => {
      try {
        const url = `https://kayakka-server.vercel.app/api/cinemas`;
        const data = await axios.get(url).then((res) => res.data);
        setCinemas(data);
      } catch (err) {
        console.error("Ошибка при получении данных от сервера:", err);
      }
    };

    getCinemas();
  }, []);

  const handleClick = (id) => {
    setActiveIndex(id);
    navigate(`/events/cinema/cinemas/${id}`);
  };

  return (
    <>
      <div className={styles.cinemas}>
        {cinemas &&
          cinemas.map((el, indx) => (
            <span
              key={indx}
              className={`${styles.cinema} ${
                activeIndex === el.id ? styles.active : ""
              }`}
              onClick={() => handleClick(el.id)}
            >
              {el.name}
            </span>
          ))}
      </div>
      <Outlet />
    </>
  );
};

export default CinemaList;

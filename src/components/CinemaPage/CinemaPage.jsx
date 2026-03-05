import styles from "./cinemapage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Seats from "./Seats/Seats";

const CinemaPage = () => {
  const { id } = useParams();
  const [halls, setHalls] = useState(null);
  const [activeHall, setActiveHall] = useState(null);

  useEffect(() => {
    const getHalls = async () => {
      try {
        const url = `https://kayakka-server.vercel.app/api/cinemas/halls?selectedCinemaId=${id}`;
        const data = await axios.get(url).then((res) => res.data);
        setHalls(data);
      } catch (err) {
        console.error("Ошибка при получении данных от сервера:", err);
      }
    };

    getHalls();
  }, [id]);

  const handleClick = (hall) => {
    setActiveHall(hall);
  };

  return (
    <>
      <div className={styles.halls}>
        {halls &&
          halls.map((hall, indx) => (
            <span
              key={indx}
              onClick={() => handleClick(hall)}
              className={`${styles.hall} ${
                activeHall?.id === hall.id ? styles.active : ""
              }`}
            >
              {hall.name}
            </span>
          ))}
      </div>
      {activeHall && <Seats hallData={activeHall} />}
    </>
  );
};

export default CinemaPage;

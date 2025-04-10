import axios from "axios";
import styles from "./event.module.css";
import responsiveStyles from "./eventAdapt.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEventFailure,
  fetchEventStart,
  fetchEventSuccess,
} from "../../features/eventSlice";
import { useParams } from "react-router";
import {
  faCalendarDays,
  faMoneyBill1,
  faLocationDot,
  faClock,
  faPhone,
  faBuildingColumns,
  faCircleInfo,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ScaleLoader} from 'react-spinners'

const Event = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { event, loading } = useSelector((state) => state.event);
  const eventData = event[0];
  const [image, setImage] = useState(null)

  useEffect(() => {
    const getEventById = async () => {
      dispatch(fetchEventStart());
      try {
        const url = id
          ? `https://kayakka-server.vercel.app/api/events/card?event=${id}`
          : "";
        const data = await axios.get(url).then((res) => res.data);
        dispatch(fetchEventSuccess(data));
      } catch (err) {
        console.error("Ошибка при получении данных от сервера:", err);
        dispatch(fetchEventFailure(err.message));
      }
    };

    getEventById();
  }, [dispatch, id]);

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
    fetchImageFromStorage(eventData?.title)
  }, [eventData?.title]);

  if(loading) return <div className={styles.loader}><ScaleLoader color="#5669ff"/></div>

  return (
    <div className={`${styles.ticket} ${responsiveStyles.ticket}`}>
      <div className={`${styles.ticketContainer} ${responsiveStyles.ticketContainer}`}>
        <div className={`${styles.ticketLeft} ${responsiveStyles.ticketLeft}`}>
          <img
            src={image ? image : ''}
            alt={eventData?.title}
            className={`${styles.ticketImage} ${responsiveStyles.ticketImage}`}
          />
        </div>

        <div className={`${styles.ticketRight} ${responsiveStyles.ticketRight}`}>
          <div className={`${styles.ticketContent} ${responsiveStyles.ticketContent}`}>
            <div className={`${styles.ticketInfo} ${responsiveStyles.ticketInfo}`}><FontAwesomeIcon
              icon={faBullhorn}
              style={{ color: "white", fontSize: "1.3vw" }}
            />
            <b className={`${styles.ticketHeader} ${responsiveStyles.ticketHeader}`}>{eventData?.title}</b></div>
            <div className={`${styles.ticketInfo} ${responsiveStyles.ticketInfo}`}>
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "white", fontSize: "1.3vw" }}
              />
              <p>{eventData?.description}</p>
            </div>
            <div className={`${styles.ticketInfo} ${responsiveStyles.ticketInfo}`}>
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ color: "white", fontSize: "1.3vw" }}
              />
              <span>{new Date(eventData?.event_date).toLocaleDateString()}</span>
            </div>
            <div className={`${styles.ticketInfo} ${responsiveStyles.ticketInfo}`}>
              <FontAwesomeIcon
                icon={faClock}
                style={{ color: "white", fontSize: "1.3vw" }}
              />
              <span>{new Date(eventData?.event_date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}</span>
            </div>
            <div className={`${styles.ticketInfo} ${responsiveStyles.ticketInfo}`}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "white", fontSize: "1.3vw" }}
              />
              <span>{eventData?.address}</span>
            </div>
            <div className={`${styles.ticketInfo} ${responsiveStyles.ticketInfo}`}>
              <FontAwesomeIcon
                icon={faBuildingColumns}
                style={{ color: "white", fontSize: "1.3vw" }}
              />
              <span>{eventData?.venue}</span>
            </div>
            <div className={`${styles.ticketInfo} ${responsiveStyles.ticketInfo}`}>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "white", fontSize: "1.3vw" }}
              />
              <span>{eventData?.phoneOrganizer}</span>
            </div>
            <div className={`${styles.ticketPrice} ${responsiveStyles.ticketPrice}`}>
              <FontAwesomeIcon
                icon={faMoneyBill1}
                style={{ color: "white", fontSize: "1.3vw" }}
              />
              <span>{eventData?.price ? `${eventData?.price} ₽` : "Бесплатно"}</span>
            </div>
            {eventData?.website && (
              <div className={`${styles.ticketFooter} ${responsiveStyles.ticketFooter}`}>
                <a
                  href={eventData?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {eventData?.website}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

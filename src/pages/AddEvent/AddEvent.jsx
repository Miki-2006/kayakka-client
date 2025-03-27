import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./addEvent.module.css";

const AddEventForm = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState(""); // Добавляем время
  const [location, setLocation] = useState({
    venue: "",
    address: "",
    max_attendees: "",
  });
  const [organizer, setOrganizer] = useState({
    organization_name: "",
    website: "",
    user_id: userId,
  });
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  // Категории
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setOrganizer((prev) => ({ ...prev, user_id: userId }));
  }, [userId]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const getCategoriesFromServer = async () => {
      try {
        const res = await axios.get(
          "https://kayakka-server.vercel.app/api/category"
        );
        setCategories(res.data);
      } catch (err) {
        console.error("Ошибка при запросе категорий");
      }
    };

    getCategoriesFromServer();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("event_date", eventDate);
    formData.append("event_time", eventTime);
    formData.append("price", price);
    formData.append("image", image);

    // Добавляем `location` и `organizer` как JSON-строки
    formData.append("location", JSON.stringify(location));
    formData.append(
      "organizer",
      JSON.stringify({ ...organizer, user_id: userId })
    );

    formData.append("category", category);

    // for (let pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }

    console.log(formData.get("title"));
    try {
      const response = await axios.post(
        "https://kayakka-server.vercel.app/api/events/adding",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setSuccess(response.data.message);
      setTitle("");
      setDescription("");
      setEventDate("");
      setEventTime("");
      setPrice("");
      setImage(null);
      setCategory("");
      setLocation({ venue: "", address: "", max_attendees: "" });
      setOrganizer({ organization_name: "", website: "", user_id: userId });
    } catch (error) {
      setError("Ошибка при добавлении мероприятия");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Добавить мероприятие</h2>

      {success && <p className={styles.success}>{success}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <form
        onSubmit={handleSubmit}
        className={styles.form}
        encType="multipart/form-data"
      >
        <label className={styles.label}>Название мероприятия</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>Дата мероприятия</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>Время мероприятия</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>Описание</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
          required
        />

        {/* Локация */}
        <label className={styles.label}>Название места</label>
        <input
          type="text"
          value={location.venue}
          onChange={(e) => setLocation({ ...location, venue: e.target.value })}
          className={styles.input}
          required
        />

        <label className={styles.label}>Адрес</label>
        <input
          type="text"
          value={location.address}
          onChange={(e) =>
            setLocation({ ...location, address: e.target.value })
          }
          className={styles.input}
          required
        />

        <label className={styles.label}>
          Максимальное количество участников
        </label>
        <input
          type="number"
          value={location.max_attendees}
          onChange={(e) =>
            setLocation({ ...location, max_attendees: e.target.value })
          }
          className={styles.input}
        />

        {/* Организатор */}
        <label className={styles.label}>Название организации</label>
        <input
          type="text"
          value={organizer.organization_name}
          onChange={(e) =>
            setOrganizer({ ...organizer, organization_name: e.target.value })
          }
          className={styles.input}
          required
        />

        <label className={styles.label}>Веб-сайт</label>
        <input
          type="text"
          value={organizer.website}
          onChange={(e) =>
            setOrganizer({ ...organizer, website: e.target.value })
          }
          className={styles.input}
        />

        <label className={styles.label}>Цена</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>Категория</label>
        

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.select}
          required
        >
          <option value="">Выберите категорию</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <label className={styles.label}>Изображение мероприятия</label>
        <input
          type="text"
          // accept="image/*"
          onChange={(e) => setImage(e.target.value)}
          className={styles.file}
          required
        />

        <button onSubmit={handleSubmit} type="submit" className={styles.button}>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;

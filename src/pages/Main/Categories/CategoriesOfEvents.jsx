import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import styles from "./categories.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoriesSuccess,
  fetchCategoriesStart,
  fetchCategoriesFailure,
} from "../../../features/categorySlice";
import { useNavigate } from "react-router";

const CategoriesOfEvents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const getCategoriesFromServer = async () => {
      dispatch(fetchCategoriesStart());
      try {
        const categories = await axios
          .get("https://kayakka-server.vercel.app/api/category")
          .then((res) => res.data);
        dispatch(fetchCategoriesSuccess(categories));
      } catch (err) {
        dispatch(fetchCategoriesFailure(err.message));
      }
    };

    getCategoriesFromServer();
  }, [dispatch]);

  const handleCategoryClick = useCallback((selectedCategory, index) => {
    if (selectedCategory === 24) {
      navigate("/events/cinema/cinemas");
    } else {
      navigate(`/events/${selectedCategory}`);
    } // Передаем выбранную категорию в родительский компонент
    setActiveIndex(index);
  }, [navigate])

  useEffect(() => {
    handleCategoryClick("все", null);
  }, [handleCategoryClick]);

  return (
    <ul className={styles.categories}>
      <li
        className={`${styles.category} ${
          activeIndex === null ? styles.active : ""
        }`}
        onClick={() => handleCategoryClick("все", null)}
      >
        Все
      </li>
      {categories &&
        categories.map((el) => (
          <li
            key={el.id}
            className={`${styles.category} ${
              activeIndex === el.id ? styles.active : ""
            }`}
            onClick={() => handleCategoryClick(el.id, el.id)}
          >
            {el.name}
          </li>
        ))}
    </ul>
  );
};

export default CategoriesOfEvents;

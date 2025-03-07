import axios from "axios";
import { useEffect } from "react";
import styles from "./categories.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoriesSuccess,
  fetchCategoriesStart,
  fetchCategoriesFailure,
} from "../../../features/categorySlice";

const CategoriesOfEvents = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

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
  return (
    <ul className={styles.categories}>
      <li className={styles.category_active}>Все</li>
      {categories &&
        categories.map((el) => (
          <li className={styles.category} key={el.id}>
            {el.name}
          </li>
        ))}
    </ul>
  );
};

export default CategoriesOfEvents;

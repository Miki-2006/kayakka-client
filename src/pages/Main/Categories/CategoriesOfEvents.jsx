import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./categories.module.css";

const CategoriesOfEvents = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategoriesFromServer = async () => {
      const categories = await axios
        .get("https://kayakka-server.vercel.app/api/category")
        .then((res) => res);
      setCategories(categories.data);
    };

    getCategoriesFromServer();
  }, []);
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

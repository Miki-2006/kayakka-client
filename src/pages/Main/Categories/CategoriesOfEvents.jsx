import axios from "axios";
import { useState } from "react";

const CategoriesOfEvents = () => {
    const [categories, setCategories] = useState(null)

  const getCategoriesFromServer = async () => {
    const categories = await axios.get(
      "https://kayakka-server.vercel.app/api/category"
    ).then((res) => res);
    setCategories(categories.data);
  };
  getCategoriesFromServer();
  return (
    <ul>
        <li>Все</li>
      {
        categories && categories.map(el => (
            <li key={el.id}>{el.name}</li>
        ))
      }
    </ul>
  );
};

export default CategoriesOfEvents;

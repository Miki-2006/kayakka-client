import { useState } from "react";
import CategoriesOfEvents from "./Categories/CategoriesOfEvents";
import Events from "./Events/Events";
import styles from "./main.module.css";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <CategoriesOfEvents setSelectedCategory={setSelectedCategory}/>
        <Events selectedCategory={selectedCategory}/>
      </div>
    </main>
  );
};

export default Main;

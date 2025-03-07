import CategoriesOfEvents from "./Categories/CategoriesOfEvents";
import Events from "./Events/Events";
import styles from "./main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <CategoriesOfEvents />
        <Events />
      </div>
    </main>
  );
};

export default Main;
